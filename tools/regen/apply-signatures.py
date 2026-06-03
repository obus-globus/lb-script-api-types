#!/usr/bin/env python3
"""
apply-signatures — T-Doc #12b post-patch.

Renames the generated `paramargN` placeholder parameter names in the
`.d.ts` tree back to their real source names, using the structured
signature manifest produced by
`tools/kdoc-extractor/ts-extract.py --signatures-out`.

Why this exists
---------------
ts-generator reflects the JVM class graph, but the JVM erases source
parameter names, so every method surfaces as
`foo(paramarg0: X, paramarg1: Y)`. The tree-sitter signature extractor
reads the LiquidBounce *source*, where the names still exist, and emits
them keyed by the same owner FQN ts-generator emits onto. This patch
threads those names into the declarations.

Matching is deliberately conservative — a *wrong* name is worse than an
obviously-meaningless `paramarg0`, so we only rename when the mapping is
unambiguous:

  * A `.d.ts` declaration of arity K is renamed only when there is exactly
    ONE source overload that fits that arity (a plain method with K params,
    or an extension method with K-1 params plus its receiver).
  * If two source overloads share an arity, that arity is skipped entirely.
  * Extension functions place the receiver at `paramarg0`; it is named
    after the receiver type (lower-camel), or `self` on collision.
  * Names that aren't valid identifiers, that collide within one decl, or
    that are TS reserved words (mangled to `name_`, matching ts-generator's
    own T-3 convention) are handled or skipped so the `.d.ts` always parses.

Idempotent: declarations with no `paramarg` token left are skipped.

Run:
    apply-signatures.py <pkg-root> <signatures.json> [--report PATH]
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path
from typing import Any, Optional


SCHEMA_VERSION = 1

# TS reserved words / context-sensitive identifiers that cannot appear as a
# bare parameter name without risking a parse error. ts-generator mangles
# colliding names by appending `_` (observed: default_, function_, new_), so
# we mirror that convention to stay consistent with the rest of the tree.
TS_RESERVED = {
    "break", "case", "catch", "class", "const", "continue", "debugger",
    "default", "delete", "do", "else", "enum", "export", "extends", "false",
    "finally", "for", "function", "if", "import", "in", "instanceof", "new",
    "null", "return", "super", "switch", "this", "throw", "true", "try",
    "typeof", "var", "void", "while", "with", "let", "static", "yield",
    "await", "implements", "interface", "package", "private", "protected",
    "public",
}

IDENT_RE = re.compile(r"^[A-Za-z_$][A-Za-z0-9_$]*$")
PARAMARG_RE = re.compile(r"\bparamarg(\d+)\b")

# Kotlin `suspend fun`s compile to a JVM method with a trailing
# `Continuation` parameter, so the reflected overload has one MORE param than
# the source. That inflated arity can coincidentally equal a real source
# overload's arity and get mislabeled (the continuation slot named after a
# real param). The continuation is never a source param, so any declaration
# carrying one is skipped — its arity does not correspond to the source.
CONTINUATION_RE = re.compile(r"\bContinuation\s*<")


def sanitize_name(name: str) -> Optional[str]:
    """Return a TS-safe identifier for a source param name, or None if it
    can't be represented (caller then skips the whole decl)."""
    if not name or not IDENT_RE.match(name):
        return None
    if name in TS_RESERVED:
        return name + "_"
    return name


def receiver_name(receiver: str, taken: set[str]) -> str:
    """Pick a name for an extension receiver (the `paramarg0` slot). Uses the
    receiver type's simple name lower-cameled (`Vector2ic` -> `vector2ic`),
    falling back to `self` on collision / unusable text."""
    simple = receiver.split("<", 1)[0].rsplit(".", 1)[-1].strip()
    cand = (simple[:1].lower() + simple[1:]) if simple else "self"
    cand = sanitize_name(cand) or "self"
    if cand in taken or cand in TS_RESERVED:
        cand = "self"
    n = cand
    i = 2
    while n in taken:
        n = f"{cand}{i}"
        i += 1
    return n


def match_paren(text: str, open_idx: int) -> Optional[int]:
    """Given the index of a `(`, return the index of its matching `)`,
    respecting string literals. Returns None if unbalanced."""
    depth = 0
    i = open_idx
    n = len(text)
    quote: Optional[str] = None
    while i < n:
        ch = text[i]
        if quote:
            if ch == "\\":
                i += 2
                continue
            if ch == quote:
                quote = None
        else:
            if ch in "\"'`":
                quote = ch
            elif ch == "(":
                depth += 1
            elif ch == ")":
                depth -= 1
                if depth == 0:
                    return i
        i += 1
    return None


def member_head_re(member: str) -> re.Pattern[str]:
    """Match a member declaration head up to and including its opening `(`.
    Mirrors the visibility/modifier shapes ts-generator emits."""
    nx = re.escape(member)
    return re.compile(
        rf"^([ \t]*)(?:/\*not mapped: \*/\s+)?"
        rf"(?:(?:public|protected|private)\s+)?"
        rf"(?:abstract\s+)?"
        rf"(?:static\s+|readonly\s+)*"
        rf"(?:get\s+|set\s+)?"
        rf"{nx}\s*(?:<[^=<>]*>)?\s*\(",
        re.MULTILINE,
    )


def build_dts_index(types_root: Path) -> dict[str, Path]:
    """FQN (with `$` and `/` flattened to `.`) -> .d.ts path. Same scheme as
    apply-kdoc, so owner FQNs from the signature manifest line up."""
    index: dict[str, Path] = {}
    for p in types_root.rglob("*.d.ts"):
        rel = p.relative_to(types_root).as_posix()
        if rel.endswith(".d.ts"):
            rel = rel[: -len(".d.ts")]
        fqn = rel.replace("/", ".").replace("$", ".")
        index[fqn] = p
    return index


def candidate_paths(owner: str, index: dict[str, Path]) -> list[Path]:
    """Owner -> .d.ts files to try. Direct hit first, then the
    `$Companion` sibling (companion members are recorded under the parent
    class but ts-generator emits them onto `Parent$Companion`)."""
    out: list[Path] = []
    if owner in index:
        out.append(index[owner])
    comp = index.get(owner + ".Companion")
    if comp is not None and comp not in out:
        out.append(comp)
    return out


def pick_overload(overloads: list[dict], dts_arity: int) -> Optional[dict]:
    """Return the unique source overload that fits a `.d.ts` decl of the
    given arity, or None if zero / ambiguous. A plain overload fits when it
    has exactly `dts_arity` params; an extension overload fits when it has
    `dts_arity - 1` (its receiver occupies paramarg0)."""
    pool = []
    for o in overloads:
        n = len(o.get("params", []))
        if o.get("isExtension"):
            if n + 1 == dts_arity:
                pool.append(o)
        else:
            if n == dts_arity:
                pool.append(o)
    return pool[0] if len(pool) == 1 else None


def names_for(overload: dict, dts_arity: int) -> Optional[list[str]]:
    """Build the ordered replacement names for paramarg0..N-1, or None if any
    name is unusable (caller skips the decl rather than partially rename)."""
    params = overload.get("params", [])
    names: list[str] = []
    taken: set[str] = set()
    if overload.get("isExtension"):
        rname = receiver_name(overload.get("receiver") or "", taken)
        names.append(rname)
        taken.add(rname)
        src = params  # params[i] -> paramarg(i+1)
    else:
        src = params
    for p in src:
        nm = sanitize_name(p.get("name") or "")
        if nm is None or nm in taken:
            return None  # unusable or duplicate -> bail on whole decl
        names.append(nm)
        taken.add(nm)
    return names if len(names) == dts_arity else None


def rename_in_file(
    text: str,
    member: str,
    overloads: list[dict],
    stats: dict[str, int],
) -> tuple[str, list[tuple[str, str]]]:
    """Rename every matching declaration of `member` in `text`. Returns the
    new text and a list of (before, after) decl-head pairs for reporting.
    Edits are applied right-to-left so offsets stay valid."""
    pat = member_head_re(member)
    edits: list[tuple[int, int, str]] = []
    report: list[tuple[str, str]] = []
    for m in pat.finditer(text):
        open_idx = m.end() - 1
        close_idx = match_paren(text, open_idx)
        if close_idx is None:
            continue
        params_span = text[open_idx : close_idx + 1]
        indices = [int(x) for x in PARAMARG_RE.findall(params_span)]
        if not indices:
            continue  # already renamed / no placeholders
        if CONTINUATION_RE.search(params_span):
            stats["skip-suspend"] += 1
            continue
        arity = max(indices) + 1
        if sorted(set(indices)) != list(range(arity)):
            stats["skip-noncontig"] += 1
            continue
        overload = pick_overload(overloads, arity)
        if overload is None:
            stats["skip-ambiguous"] += 1
            continue
        names = names_for(overload, arity)
        if names is None:
            stats["skip-unusable"] += 1
            continue
        new_span = PARAMARG_RE.sub(lambda mm: names[int(mm.group(1))], params_span)
        if new_span == params_span:
            continue
        edits.append((open_idx, close_idx + 1, new_span))
        old_head = text[m.start() : close_idx + 1].strip()
        new_head = (text[m.start() : open_idx] + new_span).strip()
        report.append((old_head, new_head))
        stats["renamed-decls"] += 1
        stats["renamed-params"] += len(names)
    for start, end, repl in sorted(edits, key=lambda e: e[0], reverse=True):
        text = text[:start] + repl + text[end:]
    return text, report


def main(argv: list[str]) -> int:
    ap = argparse.ArgumentParser(
        prog="apply-signatures",
        description="T-Doc #12b — rename paramargN to real source names",
    )
    ap.add_argument("pkg_root", type=Path, help="package root (contains types/)")
    ap.add_argument("signatures", type=Path, help="signatures.json from ts-extract")
    ap.add_argument("--report", type=Path, default=None,
                    help="write a TSV of every rename (before<TAB>after)")
    args = ap.parse_args(argv)

    pkg_root = args.pkg_root.resolve()
    types_root = pkg_root / "types"
    if not types_root.is_dir():
        print(f"apply-signatures: skip — {types_root} not a directory", file=sys.stderr)
        return 0

    doc = json.loads(args.signatures.read_text(encoding="utf-8"))
    if not isinstance(doc, dict) or "signatures" not in doc:
        print("apply-signatures: malformed signatures file (no 'signatures')", file=sys.stderr)
        return 3
    if doc.get("schemaVersion") != SCHEMA_VERSION:
        print(f"apply-signatures: schemaVersion={doc.get('schemaVersion')!r}, "
              f"expected {SCHEMA_VERSION}", file=sys.stderr)
        return 3
    signatures: dict[str, Any] = doc["signatures"]

    index = build_dts_index(types_root)

    # Group manifest keys by owner so each file is read/written once.
    by_owner: dict[str, dict[str, list[dict]]] = {}
    for key, overloads in signatures.items():
        if "." not in key:
            continue
        owner, member = key.rsplit(".", 1)
        if not isinstance(overloads, list):
            overloads = [overloads]
        by_owner.setdefault(owner, {}).setdefault(member, []).extend(overloads)

    stats = {
        "renamed-decls": 0, "renamed-params": 0,
        "skip-ambiguous": 0, "skip-noncontig": 0, "skip-unusable": 0,
        "skip-suspend": 0,
        "files-changed": 0, "owners-unresolved": 0,
    }
    report_rows: list[tuple[str, str, str]] = []

    for owner, members in by_owner.items():
        paths = candidate_paths(owner, index)
        if not paths:
            stats["owners-unresolved"] += 1
            continue
        for path in paths:
            text = path.read_text(encoding="utf-8")
            original = text
            for member, overloads in members.items():
                text, rep = rename_in_file(text, member, overloads, stats)
                for before, after in rep:
                    report_rows.append((owner, before, after))
            if text != original:
                path.write_text(text, encoding="utf-8")
                stats["files-changed"] += 1

    if args.report:
        lines = ["owner\tbefore\tafter"]
        for owner, before, after in report_rows:
            lines.append(f"{owner}\t{before}\t{after}")
        args.report.write_text("\n".join(lines) + "\n", encoding="utf-8")
        print(f"apply-signatures: report written to {args.report} "
              f"({len(report_rows)} renames)", file=sys.stderr)

    print(
        f"apply-signatures: renamed-decls={stats['renamed-decls']} "
        f"renamed-params={stats['renamed-params']} "
        f"files-changed={stats['files-changed']} "
        f"skip-ambiguous={stats['skip-ambiguous']} "
        f"skip-noncontig={stats['skip-noncontig']} "
        f"skip-unusable={stats['skip-unusable']} "
        f"skip-suspend={stats['skip-suspend']} "
        f"owners-unresolved={stats['owners-unresolved']}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
