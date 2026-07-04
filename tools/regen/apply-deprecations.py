#!/usr/bin/env python3
"""
apply-deprecations - W2 post-patch.

Injects `@deprecated <message>` TSDoc onto declarations carrying a Kotlin
`@Deprecated(...)` annotation, using the manifest produced by
`tools/kdoc-extractor/ts-extract.py --deprecations-out`.

The reflection generator does not surface Kotlin's `@Deprecated` annotation
(it is a binary-retention annotation and LB uses the annotation form, not a
KDoc `@deprecated` tag), so without this only hand-written deprecations reach
the types. This recovers them from source.

Behaviour:
  * If the target declaration already has a TSDoc block, merge a
    `@deprecated` line into it (before the closing `*/`), unless one is
    already present (idempotent).
  * Otherwise, prepend a fresh `/** @deprecated <message> */` block.

Run:
    apply-deprecations.py <pkg-root> <deprecations.json>
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path
from typing import Optional


SCHEMA_VERSION = 1


def member_decl_pattern(name: str) -> re.Pattern[str]:
    nx = re.escape(name)
    return re.compile(
        rf"^([ \t]*)(?:/\*not mapped: \*/\s+)?"
        rf"(?:(?:public|protected|private)\s+)?"
        rf"(?:abstract\s+)?"
        rf"(?:static\s+|readonly\s+)*"
        rf"(?:get\s+|set\s+)?"
        rf"{nx}(?:\s*\??\s*[:(<])",
        re.MULTILINE,
    )


def class_decl_pattern(name: str) -> re.Pattern[str]:
    nx = re.escape(name)
    return re.compile(
        rf"^(export\s+(?:abstract\s+|declare\s+)?(?:class|interface)\s+{nx}\b)",
        re.MULTILINE,
    )


def bean_getter_forms(member: str, kind: Optional[str]) -> list[str]:
    if kind != "property" or not member:
        return []
    cap = member[0].upper() + member[1:]
    if member.startswith("is") and len(member) > 2 and member[2].isupper():
        return [member]
    return [f"get{cap}"]


def build_index(types_root: Path) -> dict[str, Path]:
    index: dict[str, Path] = {}
    for p in types_root.rglob("*.d.ts"):
        rel = p.relative_to(types_root).as_posix()[: -len(".d.ts")]
        index[rel.replace("/", ".").replace("$", ".")] = p
    return index


def resolve(fqn: str, entry: dict, index: dict[str, Path]) -> list[tuple[Path, Optional[str]]]:
    """Return candidate (file, member-name) pairs. member-name None means the
    target is the class/type declaration in that file."""
    # Class/type itself.
    if fqn in index:
        return [(index[fqn], None)]
    parts = fqn.rsplit(".", 1)
    if len(parts) != 2:
        return []
    owner, member = parts
    kind = entry.get("kind")
    out: list[tuple[Path, Optional[str]]] = []
    # Owner candidate files: direct, the source-file *Kt sibling, companion.
    owner_files: list[Path] = []
    if owner in index:
        owner_files.append(index[owner])
    src_file = entry.get("source", {}).get("file", "")
    if src_file:
        stem = Path(src_file).stem
        pkg = owner.rsplit(".", 1)[0] if "." in owner else ""
        for cand in (f"{owner}.{stem}Kt", f"{pkg}.{stem}Kt" if pkg else f"{stem}Kt"):
            if cand in index and index[cand] not in owner_files:
                owner_files.append(index[cand])
    if (owner + ".Companion") in index:
        owner_files.append(index[owner + ".Companion"])
    names = [member] + bean_getter_forms(member, kind)
    for f in owner_files:
        for n in names:
            out.append((f, n))
    return out


def dep_line(entry: dict, indent: str) -> str:
    msg = (entry.get("message") or "").replace("\n", " ").strip()
    rep = (entry.get("replaceWith") or "").strip()
    if rep:
        msg = f"{msg} Use `{rep}`.".strip() if msg else f"Use `{rep}`."
    # A `*/` in the message/ReplaceWith would close the TSDoc block early and
    # emit live garbage; break the sequence so it stays inside the comment.
    msg = msg.replace("*/", "* /")
    return f"{indent} * @deprecated {msg}".rstrip()


def inject(text: str, pattern: re.Pattern[str], entry: dict) -> tuple[str, bool]:
    """Inject/merge @deprecated above the first decl matched by `pattern`.
    Returns (new-text, changed)."""
    m = pattern.search(text)
    if not m:
        return text, False
    indent = m.group(1) if m.groups() and not m.group(1).startswith("export") else ""
    decl_start = text.rfind("\n", 0, m.start()) + 1

    # Is there a TSDoc block immediately above (only blanks/annotations between)?
    head = text[:decl_start]
    lines = head.split("\n")
    i = len(lines) - 2
    close_idx = None
    while i >= 0:
        s = lines[i].strip()
        if s == "":
            i -= 1; continue
        if s.startswith("@") and not s.startswith("@param") and not s.startswith("@return"):
            i -= 1; continue
        if s.endswith("*/"):
            close_idx = i
        break
    if close_idx is not None and "/**" in lines[close_idx]:
        # One-line `/** doc */` - expand it; inserting above the line would
        # land the @deprecated outside the comment.
        if "@deprecated" in lines[close_idx]:
            return text, False
        m1 = re.match(r"([ \t]*)/\*\*\s*(.*?)\s*\*/\s*$", lines[close_idx])
        if m1:
            ind, content = m1.group(1), m1.group(2)
            repl = [f"{ind}/**"]
            if content:
                repl.append(f"{ind} * {content}")
            repl.append(dep_line(entry, ind))
            repl.append(f"{ind} */")
            lines[close_idx:close_idx + 1] = repl
            return "\n".join(lines) + text[decl_start:], True
        close_idx = None  # malformed one-liner - fall through to a new block
    if close_idx is not None:
        # Existing block - find its `/**` opener; a plain `/* ... */` comment
        # is NOT a doc block (inserting into it would emit a parse error).
        j = close_idx
        while j >= 0 and "/**" not in lines[j]:
            if "/*" in lines[j]:
                close_idx = None
                break
            j -= 1
        else:
            if j < 0:
                close_idx = None
    if close_idx is not None:
        block = "\n".join(lines[max(j, 0):close_idx + 1])
        if "@deprecated" in block:
            return text, False
        block_indent = (re.match(r"[ \t]*", lines[close_idx]).group(0))[:-1] or indent
        lines.insert(close_idx, dep_line(entry, block_indent))
        return "\n".join(lines) + text[decl_start:], True
    # No block - create one.
    new_block = f"{indent}/**\n{dep_line(entry, indent)}\n{indent} */\n"
    return text[:decl_start] + new_block + text[decl_start:], True


def main(argv: list[str]) -> int:
    ap = argparse.ArgumentParser(prog="apply-deprecations")
    ap.add_argument("pkg_root", type=Path)
    ap.add_argument("deprecations", type=Path)
    args = ap.parse_args(argv)

    types_root = args.pkg_root.resolve() / "types"
    if not types_root.is_dir():
        print(f"apply-deprecations: skip - {types_root} not a directory", file=sys.stderr)
        return 0

    doc = json.loads(args.deprecations.read_text(encoding="utf-8"))
    if doc.get("schemaVersion") != SCHEMA_VERSION or "deprecations" not in doc:
        print("apply-deprecations: malformed deprecations file", file=sys.stderr)
        return 3
    deprecations: dict[str, dict] = doc["deprecations"]
    index = build_index(types_root)

    injected = 0
    unresolved = 0
    cache: dict[Path, str] = {}
    for fqn, entry in deprecations.items():
        done = False
        for path, member in resolve(fqn, entry, index):
            text = cache.get(path) or path.read_text(encoding="utf-8")
            pat = (member_decl_pattern(member) if member is not None
                   else class_decl_pattern(path.name[: -len(".d.ts")]))
            new_text, changed = inject(text, pat, entry)
            if changed:
                cache[path] = new_text
                injected += 1
                done = True
                break
            # already present counts as resolved (idempotent)
            if pat.search(text):
                done = True
                break
        if not done:
            unresolved += 1

    for path, text in cache.items():
        path.write_text(text, encoding="utf-8")

    print(f"apply-deprecations: injected={injected} "
          f"unresolved={unresolved} of {len(deprecations)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
