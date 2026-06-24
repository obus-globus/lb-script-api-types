#!/usr/bin/env python3
"""
ts-extract.py — tree-sitter-based KDoc extractor for the
@liquidbounce-helper/script-api-types Phase B pipeline.

Same output schema as hybrid-extract.py (the LSP+regex version):

    {
      "<fqn>": [
        {
          "doc": "...",
          "params": {...},
          "returns": "...",
          "deprecated": "...",
          "since": "...",
          "see": [...],
          "sample": "...",
          "kind": "class|object|interface|function|property|...",
          "source": {"file": "...", "line": N}
        },
        ...
      ],
      ...
    }

Why a tree-sitter rewrite of hybrid-extract.py:

  • No 1.2 GB kotlin-lsp dependency. tree-sitter-kotlin is a 2 MB
    Python wheel.
  • No JSON-RPC dance / startup race.
  • Synchronous in-process; the full LB checkout extracts in seconds
    instead of ~50 s.
  • Single file, no Gradle / JVM / DAEMON involvement.

Setup (one-time):

    python3 -m venv tools/kdoc-extractor/.venv-ts
    tools/kdoc-extractor/.venv-ts/bin/pip install tree-sitter tree-sitter-kotlin

Usage:

    tools/kdoc-extractor/.venv-ts/bin/python3 \\
        tools/kdoc-extractor/lsp/ts-extract.py \\
        --project references/liquidbounce \\
        --out tools/kdoc-extractor/manifest.json
"""
from __future__ import annotations

import argparse
import json
import re
import sys
import time
from pathlib import Path
from typing import Any, Iterable, Optional

import tree_sitter_kotlin as tsk
from tree_sitter import Language, Node, Parser

LANG = Language(tsk.language())
PARSER = Parser(LANG)


# ------------------------------------------------------------------------
# KDoc text parser — shared with hybrid-extract.py semantics
# ------------------------------------------------------------------------
TAG_RE = re.compile(r"^@(\w+)(?:\s+(.*))?$")


def _strip_kdoc(text: str) -> str:
    """Strip the surrounding /** … */ and leading ` * `."""
    text = text.strip()
    if text.startswith("/**"):
        text = text[3:]
    elif text.startswith("/*"):
        text = text[2:]
    if text.endswith("*/"):
        text = text[:-2]
    lines: list[str] = []
    for raw in text.splitlines():
        s = raw.strip()
        if s.startswith("*"):
            s = s[1:]
            if s.startswith(" "):
                s = s[1:]
        lines.append(s)
    while lines and not lines[0].strip():
        lines.pop(0)
    while lines and not lines[-1].strip():
        lines.pop()
    return "\n".join(lines)


def parse_kdoc(raw: str) -> Optional[dict[str, Any]]:
    """Parse a KDoc /** … */ block text into our manifest entry shape."""
    body = _strip_kdoc(raw)
    if not body.strip():
        return None
    doc_lines: list[str] = []
    params: dict[str, str] = {}
    returns: Optional[str] = None
    deprecated: Optional[str] = None
    since: Optional[str] = None
    see: list[str] = []
    sample: Optional[str] = None

    current: Optional[tuple[str, Any]] = None  # ("param", name) | ("returns",) etc.

    def flush(buf: list[str]) -> str:
        return "\n".join(buf).rstrip()

    buf: list[str] = []

    def commit():
        nonlocal returns, deprecated, since, sample
        if current is None:
            return
        text = flush(buf)
        kind = current[0]
        if kind == "param":
            params[current[1]] = text
        elif kind == "returns":
            returns = text
        elif kind == "deprecated":
            deprecated = text
        elif kind == "since":
            since = text
        elif kind == "see":
            see.append(text)
        elif kind == "sample":
            sample = text
        buf.clear()

    for line in body.splitlines():
        m = TAG_RE.match(line.strip())
        if m:
            commit()
            tag, rest = m.group(1), (m.group(2) or "").strip()
            if tag == "param":
                parts = rest.split(None, 1)
                if not parts:
                    current = None
                    continue
                name = parts[0]
                current = ("param", name)
                buf = [parts[1]] if len(parts) > 1 else []
            elif tag in ("return", "returns"):
                current = ("returns",)
                buf = [rest] if rest else []
            elif tag == "deprecated":
                current = ("deprecated",)
                buf = [rest] if rest else []
            elif tag == "since":
                current = ("since",)
                buf = [rest] if rest else []
            elif tag == "see":
                current = ("see",)
                buf = [rest] if rest else []
            elif tag == "sample":
                current = ("sample",)
                buf = [rest] if rest else []
            else:
                # Unknown tag — fold into the previous bucket's text.
                if current is None:
                    doc_lines.append(line)
                else:
                    buf.append(line)
        else:
            if current is None:
                doc_lines.append(line)
            else:
                buf.append(line)
    commit()

    doc = "\n".join(doc_lines).strip()
    if not (doc or params or returns or deprecated or since or see or sample):
        return None
    out: dict[str, Any] = {"doc": doc}
    if params:
        out["params"] = params
    if returns is not None:
        out["returns"] = returns
    if deprecated is not None:
        out["deprecated"] = deprecated
    if since is not None:
        out["since"] = since
    if see:
        out["see"] = see
    if sample:
        out["sample"] = sample
    return out


# ------------------------------------------------------------------------
# tree-sitter walker
# ------------------------------------------------------------------------
# Kotlin grammar nodes that introduce a declaration we want to extract.
DECL_TYPES = {
    "class_declaration": "class",
    "object_declaration": "object",
    "interface_declaration": "interface",
    "function_declaration": "function",
    "property_declaration": "property",
    "type_alias": "typealias",
    "enum_class_body": "enum",
    "secondary_constructor": "constructor",
}

# Nodes whose children contain further declarations.
CONTAINER_TYPES = {
    "source_file",
    "class_body",
    "enum_class_body",
    "object_literal",  # for completeness; we skip locals later
}


def _node_text(src: bytes, n: Node) -> str:
    return src[n.start_byte : n.end_byte].decode("utf-8", "replace")


def _find_identifier(n: Node) -> Optional[str]:
    """Get the declared simple name from a declaration node."""
    # function_declaration: optional receiver (user_type . identifier).
    # We want the last `identifier` child that is NOT inside a
    # function_value_parameters / type_parameters / user_type subtree.
    if n.type == "function_declaration":
        # The declared name is the identifier child that is a *direct*
        # child of n and comes after the optional receiver `.` token.
        # Receiver form:  fun  USER_TYPE  .  IDENT  ( params )
        # Normal form:    fun  IDENT             ( params )
        # Walk direct children.
        ident_children = [c for c in n.children if c.type == "identifier"]
        if not ident_children:
            return None
        return _node_text_at(n, ident_children[-1])
    if n.type == "property_declaration":
        # variable_declaration → identifier
        for c in n.children:
            if c.type == "variable_declaration":
                for cc in c.children:
                    if cc.type == "identifier":
                        return _node_text_at(n, cc)
        return None
    if n.type == "secondary_constructor":
        return "<init>"
    # class/object/interface/typealias all have a direct `identifier` child.
    for c in n.children:
        if c.type == "identifier":
            return _node_text_at(n, c)
    return None


def _node_text_at(parent: Node, child: Node) -> str:
    """Like _node_text, but reuse the parent's source bytes if we passed it."""
    # Tree-sitter Node has .text directly; use it.
    return child.text.decode("utf-8", "replace") if child.text else ""


def _is_function_receiver(fn_node: Node) -> Optional[str]:
    """For function_declaration: return the receiver type as a string if it
    is an extension function (e.g. `fun String.foo()` → 'String'); else None.
    """
    children = list(fn_node.children)
    # Find user_type followed by '.' followed by identifier near the start.
    for i, c in enumerate(children):
        if c.type == "user_type" and i + 2 < len(children):
            if children[i + 1].type == "." and children[i + 2].type == "identifier":
                return c.text.decode("utf-8", "replace") if c.text else None
        if c.type == "function_value_parameters":
            break
    return None


def _preceding_kdoc(node: Node) -> Optional[str]:
    """Walk up to the parent's children and grab the nearest preceding
    block_comment that starts with '/**'. Skip blank text / line_comment."""
    parent = node.parent
    if parent is None:
        return None
    siblings = parent.children
    try:
        idx = siblings.index(node)
    except ValueError:
        return None
    for j in range(idx - 1, -1, -1):
        sib = siblings[j]
        t = sib.type
        if t in ("block_comment",):
            text = sib.text.decode("utf-8", "replace") if sib.text else ""
            if text.startswith("/**"):
                return text
            # /* … */ but not a KDoc — stop searching (it would shadow KDoc above).
            return None
        if t == "line_comment":
            # //-comments are skipped (don't shadow).
            continue
        if t in ("modifiers", "annotation", "annotated_expression"):
            # Modifiers/annotations attach to the decl; continue searching above.
            # `annotated_expression` is tree-sitter-kotlin's wrapper for an
            # annotation that carries arguments (e.g. `@Target(...)`); when the
            # following declaration parses as its own sibling, the wrapper sits
            # between it and its KDoc, so skip over it too.
            continue
        # Any other real node (another declaration, a `{`/`}`, etc.) means
        # there is no KDoc directly above this one.
        return None
    # Exhausted this parent's preceding siblings without finding a KDoc. If the
    # node is itself wrapped in an annotated_expression (the annotation-class
    # mis-parse below), the KDoc lives before that wrapper one level up.
    if parent.type == "annotated_expression":
        return _preceding_kdoc(parent)
    return None


def _extract_package(root: Node) -> str:
    for c in root.children:
        if c.type == "package_header":
            # `package <qualified_identifier>` — collect identifiers and backticks.
            parts: list[str] = []
            for cc in c.children:
                if cc.type == "qualified_identifier":
                    for ccc in cc.children:
                        if ccc.type == "identifier":
                            txt = ccc.text.decode("utf-8", "replace") if ccc.text else ""
                            parts.append(txt.strip("`"))
                elif cc.type == "identifier":
                    txt = cc.text.decode("utf-8", "replace") if cc.text else ""
                    parts.append(txt.strip("`"))
            return ".".join(parts)
    return ""


def _is_suspend(fn_node: Node) -> bool:
    """True if the function declaration carries a `suspend` modifier."""
    mods = _child_of_type(fn_node, "modifiers")
    if mods is None:
        return False
    return "suspend" in (mods.text.decode("utf-8", "replace") if mods.text else "")


def _record_signature(
    child: Node,
    member: str,
    owner: str,
    rel_file: str,
    sigs: dict[str, list[dict[str, Any]]],
    *,
    params_node_type: str = "function_value_parameters",
    receiver: Optional[str] = None,
) -> None:
    """Append a structured signature record for a function/constructor under
    `<owner>.<member>` into `sigs`."""
    params_node = _child_of_type(child, params_node_type)
    params = _param_records(params_node) if params_node is not None else []
    rec: dict[str, Any] = {
        "params": params,
        "returns": _return_type_str(child),
        "source": {"file": rel_file, "line": child.start_point[0] + 1},
    }
    # A `suspend fun` reflects with an extra trailing Continuation param, so its
    # source arity does not match the reflected/.d.ts arity. Flag it so the
    # rename post-patch never matches a source suspend overload to a .d.ts decl.
    if _is_suspend(child):
        rec["suspend"] = True
    if receiver:
        rec["isExtension"] = True
        rec["receiver"] = receiver
    sigs.setdefault(f"{owner}.{member}", []).append(rec)


def _annotation_class_infix(annotated: Node) -> Optional[tuple[str, Node]]:
    """Recover an annotation class that tree-sitter-kotlin (1.1.x) mis-parses.

    `@Retention(...) annotation class Foo` (no primary constructor) is parsed as
        annotated_expression( annotation(@Retention(...)),
                              infix_expression( id`annotation` id`class` id`Foo` ) )
    instead of a class_declaration, so the walker never sees it and its KDoc is
    dropped. Detect that exact 3-identifier infix shape and return (name, node).
    Annotation classes WITH a primary constructor parse correctly as a
    class_declaration (handled by the normal path).
    """
    for c in annotated.children:
        if c.type != "infix_expression":
            continue
        ids = [g for g in c.children if g.type == "identifier"]
        if len(ids) != 3:
            continue
        t0 = ids[0].text.decode("utf-8", "replace") if ids[0].text else ""
        t1 = ids[1].text.decode("utf-8", "replace") if ids[1].text else ""
        if t0 == "annotation" and t1 == "class":
            name = ids[2].text.decode("utf-8", "replace") if ids[2].text else ""
            return name.strip("`"), c
    return None


def _walk(
    node: Node,
    parent_parts: list[str],
    rel_file: str,
    package: str,
    out: dict[str, list[dict[str, Any]]],
    sigs: dict[str, list[dict[str, Any]]],
    deps: dict[str, dict[str, Any]],
) -> None:
    for child in node.children:
        if child.type == "annotated_expression":
            # Recover an annotation class hidden inside the annotation wrapper
            # (see _annotation_class_infix). Emit it as a `class` so its KDoc and
            # @Deprecated land on the FQN ts-generator uses.
            rec = _annotation_class_infix(child)
            if rec is not None:
                name, _ident = rec
                parts = parent_parts + [name]
                fqn = (package + "." if package else "") + ".".join(parts)
                dep = _deprecation_of(child)
                if dep is not None:
                    deps[fqn] = {**dep, "kind": "class",
                                 "source": {"file": rel_file,
                                            "line": child.start_point[0] + 1}}
                kdoc_text = _preceding_kdoc(child)
                if kdoc_text:
                    parsed = parse_kdoc(kdoc_text)
                    if parsed is not None:
                        entry = dict(parsed)
                        entry["kind"] = "class"
                        entry["source"] = {"file": rel_file,
                                           "line": child.start_point[0] + 1}
                        out.setdefault(fqn, []).append(entry)
            continue
        if child.type in DECL_TYPES:
            kind = DECL_TYPES[child.type]
            name = _find_identifier(child)
            if name is None:
                continue
            name = name.strip("`")

            # Signature capture (#12b) — independent of KDoc, keyed by the
            # FQN ts-generator emits the declaration onto.
            if kind == "function":
                recv = _is_function_receiver(child)
                owner = _owner_fqn(parent_parts, package, rel_file)
                _record_signature(child, name, owner, rel_file, sigs,
                                   receiver=recv)
            elif kind == "constructor":
                # secondary_constructor — owner is the enclosing class.
                owner = _owner_fqn(parent_parts, package, rel_file)
                _record_signature(child, "constructor", owner, rel_file, sigs)

            # Companion-object flattening: members live on the parent class
            # namespace in the generated TS.
            if name == "Companion" and kind == "object":
                # Don't emit "Foo.Companion"; just recurse with parent scope.
                body = _child_of_type(child, "class_body")
                if body is not None:
                    _walk(body, parent_parts, rel_file, package, out, sigs, deps)
                continue

            # Extension functions on type receivers: re-parent so the FQN
            # is "<package>.<ReceiverType>.<name>".
            parts: list[str]
            if kind == "function" and not parent_parts:
                recv = _is_function_receiver(child)
                if recv:
                    parts = [recv, name]
                else:
                    parts = [name]
            else:
                parts = parent_parts + [name]

            fqn = (package + "." if package else "") + ".".join(parts)

            # @Deprecated annotation (independent of KDoc), keyed like the KDoc
            # manifest so apply-deprecations resolves it the same way.
            dep = _deprecation_of(child)
            if dep is not None:
                deps[fqn] = {**dep, "kind": kind,
                             "source": {"file": rel_file, "line": child.start_point[0] + 1}}

            kdoc_text = _preceding_kdoc(child)
            if kdoc_text:
                parsed = parse_kdoc(kdoc_text)
                if parsed is not None:
                    entry = dict(parsed)
                    entry["kind"] = kind
                    entry["source"] = {"file": rel_file, "line": child.start_point[0] + 1}
                    out.setdefault(fqn, []).append(entry)

            # Also harvest data-class / constructor params.
            if kind in ("class", "object", "interface"):
                ctor = _child_of_type(child, "primary_constructor")
                if ctor is not None:
                    # Primary-constructor signature (#12b): owner is the class.
                    if _child_of_type(ctor, "class_parameters") is not None:
                        _record_signature(
                            ctor, "constructor", fqn, rel_file, sigs,
                            params_node_type="class_parameters",
                        )
                    cparams = _child_of_type(ctor, "class_parameters")
                    if cparams is not None:
                        for cp in cparams.children:
                            if cp.type != "class_parameter":
                                continue
                            # val/var keyword tells us it's a property; otherwise it's
                            # only a constructor parameter, no public API.
                            has_property_keyword = any(
                                c.type in ("val", "var") for c in cp.children
                            )
                            if not has_property_keyword:
                                continue
                            ident = None
                            for cc in cp.children:
                                if cc.type == "identifier":
                                    ident = cc.text.decode("utf-8", "replace") if cc.text else ""
                                    break
                            if not ident:
                                continue
                            ident = ident.strip("`")
                            member_fqn = fqn + "." + ident
                            dep2 = _deprecation_of(cp)
                            if dep2 is not None:
                                deps[member_fqn] = {**dep2, "kind": "property",
                                                    "source": {"file": rel_file,
                                                               "line": cp.start_point[0] + 1}}
                            kdoc_text2 = _preceding_kdoc(cp)
                            if kdoc_text2:
                                parsed2 = parse_kdoc(kdoc_text2)
                                if parsed2 is not None:
                                    entry2 = dict(parsed2)
                                    entry2["kind"] = "property"
                                    entry2["source"] = {
                                        "file": rel_file,
                                        "line": cp.start_point[0] + 1,
                                    }
                                    out.setdefault(member_fqn, []).append(entry2)
                # Recurse into class body for nested members.
                body = _child_of_type(child, "class_body")
                if body is None:
                    body = _child_of_type(child, "enum_class_body")
                if body is not None:
                    _walk(body, parts, rel_file, package, out, sigs, deps)
        elif child.type in CONTAINER_TYPES:
            _walk(child, parent_parts, rel_file, package, out, sigs, deps)
        elif child.type == "companion_object":
            # Companion-object members flatten into the enclosing class
            # namespace (TS generator emits them as statics).
            body = _child_of_type(child, "class_body")
            if body is not None:
                _walk(body, parent_parts, rel_file, package, out, sigs, deps)


def _child_of_type(node: Node, type_name: str) -> Optional[Node]:
    for c in node.children:
        if c.type == type_name:
            return c
    return None


# ------------------------------------------------------------------------
# Signature extraction (T-Doc #12b — real parameter names + types)
#
# Independent of KDoc: we capture the structured value-parameter list for
# *every* function / constructor so the post-patch can rename the generated
# `paramargN` placeholders back to their real source names. The KDoc manifest
# (above) is untouched; this is written to a separate signatures file.
# ------------------------------------------------------------------------

# Type-bearing child node kinds that can follow a `:` in a parameter.
_TYPE_NODE_TYPES = {
    "user_type",
    "nullable_type",
    "function_type",
    "parenthesized_type",
    "nullable_type",
    "type_reference",
    "dynamic_type",
}


def _has_vararg(node: Node) -> bool:
    """True if a `vararg` modifier appears anywhere in this parameter's
    own subtree (covers class_parameter, where the modifier is nested)."""
    if node.type == "vararg":
        return True
    for c in node.children:
        if _has_vararg(c):
            return True
    return False


def _one_param(c: Node) -> dict[str, Any]:
    """Extract {name, type, nullable, vararg} from a `parameter` /
    `class_parameter` node. Name is the identifier before the `:`; type is
    the first type node after it."""
    name: Optional[str] = None
    type_node: Optional[Node] = None
    seen_colon = False
    for cc in c.children:
        if cc.type == ":":
            seen_colon = True
            continue
        if not seen_colon:
            if cc.type == "identifier" and name is None:
                name = (cc.text.decode("utf-8", "replace") if cc.text else "").strip("`")
        else:
            if type_node is None and cc.type not in ("=",):
                # First non-`=` node after the colon is the declared type.
                if cc.type in _TYPE_NODE_TYPES or cc.type.endswith("_type"):
                    type_node = cc
    type_txt: Optional[str] = None
    nullable = False
    if type_node is not None:
        type_txt = type_node.text.decode("utf-8", "replace") if type_node.text else None
        nullable = type_node.type == "nullable_type"
        if type_txt and type_txt.endswith("?"):
            nullable = True
    return {
        "name": name,
        "type": type_txt,
        "nullable": nullable,
        "vararg": _has_vararg(c),
    }


def _param_records(params_node: Node) -> list[dict[str, Any]]:
    """Walk a `function_value_parameters` / `class_parameters` node and return
    an ordered list of param dicts. Handles `vararg` emitted as a preceding
    sibling `parameter_modifiers` node (function params) as well as nested
    inside the parameter (class params)."""
    out: list[dict[str, Any]] = []
    pending_vararg = False
    for c in params_node.children:
        if c.type == "parameter_modifiers":
            if _has_vararg(c) or "vararg" in (
                c.text.decode("utf-8", "replace") if c.text else ""
            ):
                pending_vararg = True
            continue
        if c.type in ("parameter", "class_parameter"):
            rec = _one_param(c)
            if pending_vararg:
                rec["vararg"] = True
            out.append(rec)
            pending_vararg = False
    return out


def _return_type_str(fn_node: Node) -> Optional[str]:
    """The declared return type of a function, if any. It is the type node
    that follows the `)` of the value parameters and a `:`."""
    children = list(fn_node.children)
    closed = False
    seen_colon = False
    for c in children:
        if c.type == "function_value_parameters":
            closed = True
            continue
        if not closed:
            continue
        if c.type == ":":
            seen_colon = True
            continue
        if seen_colon and (c.type in _TYPE_NODE_TYPES or c.type.endswith("_type")):
            return c.text.decode("utf-8", "replace") if c.text else None
        # Once we hit the body / `=` without a type, there is no return type.
        if c.type in ("function_body", "=", "block"):
            break
    return None


def _string_content(string_literal: Node) -> str:
    """Concatenate the literal text of a `string_literal` node (its
    `string_content` children), ignoring interpolations/escapes' structure."""
    parts: list[str] = []
    for c in string_literal.children:
        if c.type == "string_content":
            parts.append(c.text.decode("utf-8", "replace") if c.text else "")
    return "".join(parts)


def _deprecation_of(child: Node) -> Optional[dict[str, str]]:
    """If the declaration carries a Kotlin `@Deprecated(...)` annotation,
    return {message?, replaceWith?}; else None. Handles the positional or
    `message = "..."` form, and an optional `ReplaceWith("...")` argument."""
    mods = _child_of_type(child, "modifiers")
    if mods is None:
        return None
    for ann in mods.children:
        if ann.type != "annotation":
            continue
        ci = _child_of_type(ann, "constructor_invocation")
        if ci is None:
            continue
        ut = _child_of_type(ci, "user_type")
        name = (ut.text.decode("utf-8", "replace") if ut is not None and ut.text else "")
        if name.split(".")[-1] != "Deprecated":
            continue
        message: Optional[str] = None
        replace_with: Optional[str] = None
        vargs = _child_of_type(ci, "value_arguments")
        if vargs is not None:
            for va in vargs.children:
                if va.type != "value_argument":
                    continue
                # The message is the first value-argument carrying a direct
                # string literal (positional, or `message = "..."`).
                sl = _child_of_type(va, "string_literal")
                if sl is not None:
                    if message is None:
                        message = _string_content(sl)
                    continue
                # ReplaceWith("...") — a `call_expression` (positional or
                # `replaceWith = ReplaceWith(...)` named) whose name is an
                # `identifier`; its string is nested one level deeper.
                inner = _child_of_type(va, "call_expression")
                if inner is not None:
                    inner_id = _child_of_type(inner, "identifier")
                    inner_name = (inner_id.text.decode("utf-8", "replace")
                                  if inner_id is not None and inner_id.text else "")
                    if inner_name.split(".")[-1] == "ReplaceWith":
                        inner_args = _child_of_type(inner, "value_arguments")
                        if inner_args is not None:
                            for iva in inner_args.children:
                                if iva.type == "value_argument":
                                    isl = _child_of_type(iva, "string_literal")
                                    if isl is not None:
                                        replace_with = _string_content(isl)
                                        break
        out: dict[str, str] = {}
        if message:
            out["message"] = message
        if replace_with:
            out["replaceWith"] = replace_with
        return out  # may be {} — still flags "deprecated" with no message
    return None


def _owner_fqn(parent_parts: list[str], package: str, rel_file: str) -> str:
    """The FQN of the class that ts-generator emits this declaration onto.

    - Member of a class/object/interface -> the enclosing class FQN.
    - Top-level (file-level) function -> `<package>.<FileBaseName>Kt`
      (Kotlin compiles file-level functions into a `<File>Kt` class, exactly
      what ts-generator reflects). `@file:JvmName` would change the class name;
      in that case the owner simply won't resolve and no rename happens (safe).
    """
    if parent_parts:
        base = ".".join(parent_parts)
    else:
        base = Path(rel_file).stem + "Kt"
    return (package + "." if package else "") + base


# ------------------------------------------------------------------------
# Main
# ------------------------------------------------------------------------
def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--project", required=True, help="Path to LiquidBounce checkout")
    ap.add_argument("--out", default=None,
                    help="Output KDoc manifest.json path (optional). NOTE: the "
                         "committed manifest is produced by the Kotlin-PSI "
                         "extractor; only pass --out if you intend to overwrite "
                         "it with the tree-sitter variant.")
    ap.add_argument("--signatures-out", default=None,
                    help="Output signatures.json path (#12b — real parameter "
                         "names + types for the paramargN rename post-patch).")
    ap.add_argument("--deprecations-out", default=None,
                    help="Output deprecations.json path (W2 — @Deprecated "
                         "annotation messages for the @deprecated TSDoc post-patch).")
    ap.add_argument(
        "--source-roots",
        nargs="+",
        default=["src/main/kotlin"],
        help="Source roots inside --project to scan (relative paths).",
    )
    ap.add_argument("--limit", type=int, default=0, help="Stop after N files (debug)")
    args = ap.parse_args()

    if not args.out and not args.signatures_out and not args.deprecations_out:
        print("FAIL: pass at least one of --out / --signatures-out / --deprecations-out",
              file=sys.stderr)
        return 2

    project = Path(args.project).resolve()
    if not project.is_dir():
        print(f"FAIL: --project {project} is not a directory", file=sys.stderr)
        return 2

    files: list[Path] = []
    for root in args.source_roots:
        files.extend(sorted((project / root).rglob("*.kt")))
    if args.limit:
        files = files[: args.limit]
    if not files:
        print("FAIL: no .kt files found", file=sys.stderr)
        return 2

    print(f"[ts] scanning {len(files)} .kt files under {project}", file=sys.stderr)

    out: dict[str, list[dict[str, Any]]] = {}
    sigs: dict[str, list[dict[str, Any]]] = {}
    deps: dict[str, dict[str, Any]] = {}
    files_with_kdoc = 0
    kdocs = 0
    t0 = time.time()
    for i, path in enumerate(files):
        try:
            data = path.read_bytes()
        except OSError as e:
            print(f"  [warn] {path}: {e}", file=sys.stderr)
            continue
        tree = PARSER.parse(data)
        root = tree.root_node
        if root.has_error:
            # Tree-sitter is forgiving; partial trees are still useful.
            pass
        package = _extract_package(root)
        rel_file = str(path.relative_to(project))
        before = sum(len(v) for v in out.values())
        _walk(root, [], rel_file, package, out, sigs, deps)
        after = sum(len(v) for v in out.values())
        added = after - before
        if added:
            files_with_kdoc += 1
            kdocs += added
        if (i + 1) % 200 == 0:
            elapsed = time.time() - t0
            rate = (i + 1) / max(elapsed, 1e-6)
            print(
                f"[ts] {i + 1}/{len(files)} files ({rate:.0f}/s); "
                f"{files_with_kdoc} with KDoc, {kdocs} KDocs extracted",
                file=sys.stderr,
            )

    elapsed = time.time() - t0
    print(
        f"[ts] done {len(files)} files in {elapsed:.1f}s "
        f"({len(files) / max(elapsed,1e-6):.0f}/s); "
        f"{files_with_kdoc} with KDoc, {kdocs} KDocs",
        file=sys.stderr,
    )

    if args.out:
        # Collapse single-entry lists to scalar dict (manifest historical shape).
        final: dict[str, Any] = {}
        for fqn, entries in sorted(out.items()):
            if len(entries) == 1:
                final[fqn] = entries[0]
            else:
                final[fqn] = entries
        Path(args.out).write_text(json.dumps(final, indent=2, ensure_ascii=False) + "\n")
        print(
            f"[ts] wrote {len(final)} unique FQNs (from {kdocs} KDocs in "
            f"{files_with_kdoc} files) → {args.out}",
            file=sys.stderr,
        )

    if args.signatures_out:
        total_overloads = sum(len(v) for v in sigs.values())
        total_params = sum(
            len(rec.get("params", [])) for v in sigs.values() for rec in v
        )
        envelope = {
            "schemaVersion": 1,
            "signatures": {fqn: sigs[fqn] for fqn in sorted(sigs)},
        }
        Path(args.signatures_out).write_text(
            json.dumps(envelope, indent=2, ensure_ascii=False) + "\n"
        )
        print(
            f"[ts] wrote signatures for {len(sigs)} members "
            f"({total_overloads} overloads, {total_params} params) "
            f"→ {args.signatures_out}",
            file=sys.stderr,
        )

    if args.deprecations_out:
        envelope = {
            "schemaVersion": 1,
            "deprecations": {fqn: deps[fqn] for fqn in sorted(deps)},
        }
        Path(args.deprecations_out).write_text(
            json.dumps(envelope, indent=2, ensure_ascii=False) + "\n"
        )
        print(
            f"[ts] wrote {len(deps)} @Deprecated entries → {args.deprecations_out}",
            file=sys.stderr,
        )
    return 0


if __name__ == "__main__":
    sys.exit(main())
