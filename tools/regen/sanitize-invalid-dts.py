#!/usr/bin/env python3
"""Remove or repair generated .d.ts files that are not valid TypeScript.

The reflection generator emits a file per JVM class, including some whose
class name cannot be a TS identifier or whose heritage clause TS can't parse.
They are dead weight — no script can import them — but any consumer with a
broad `include` glob gets hard parse errors from them, and the typecheck
gate's full-tree syntax walk would trip on them forever.

Three repairs, all idempotent:

  S1  delete `package-info.d.ts` files — Java package descriptors
      (`export interface package-info` is a parse error; ~1k files).
  S2  delete files whose exported declaration name is not a valid TS
      identifier — Kotlin file-facade classes like okio's `-Base64` /
      `-DeprecatedOkio` and LB's fastutil `-internal` / `weighted-terminal`
      (`export class -Base64` is a parse error, and the name being
      unimportable means deletion loses nothing). Safety: a candidate is NOT
      deleted (only reported) if any file outside the deletion set imports it.
  S3  strip *top-level* function-type entries from heritage clauses —
      `class X extends Object implements () => void, Handler` is a parse
      error (Kotlin function supertypes); arrows nested inside generic args
      (`implements JsonSerializer<() => T>`) are valid and left alone.

Usage: sanitize-invalid-dts.py [path/to/typings]
"""
import pathlib
import re
import sys

PKG = (pathlib.Path(sys.argv[1]) if len(sys.argv) > 1
       else pathlib.Path(__file__).resolve().parents[2] / "typings")
TYPES = PKG / "types"

IDENT = re.compile(r"^[A-Za-z_$][A-Za-z0-9_$]*$")
EXPORT_NAME = re.compile(
    r"^export (?:abstract )?(?:class|interface|type|enum) ([^\s<({]+)", re.M)
DECL_LINE = re.compile(
    r"^(export (?:abstract )?(?:class|interface)\b[^\n{]*)\{", re.M)
IMPORT_SPEC = re.compile(r"""from\s+['"]([^'"]+)['"]""")


def _depth_steps(s: str):
    """Yield (index, char, depth-BEFORE-char), treating `=>` atomically."""
    depth = 0
    for i, ch in enumerate(s):
        if ch == ">" and i > 0 and s[i - 1] == "=":
            yield i, ch, depth          # arrow, not a closing bracket
            continue
        if ch in "<(":
            yield i, ch, depth
            depth += 1
        elif ch in ">)":
            depth -= 1
            yield i, ch, depth + 1
        else:
            yield i, ch, depth


def split_top_level(s: str):
    """Split a heritage list on commas at angle/paren nesting depth 0."""
    parts, cur, last = [], [], 0
    for i, ch, depth in _depth_steps(s):
        if ch == "," and depth == 0:
            parts.append(s[last:i])
            last = i + 1
    parts.append(s[last:])
    return [p.strip() for p in parts if p.strip()]


def find_top_level(s: str, word: str) -> int:
    """Index of `word` at nesting depth 0, or -1."""
    hits = {i for i, ch, depth in _depth_steps(s) if depth == 0}
    idx = s.find(word)
    while idx != -1:
        if all(j in hits for j in range(idx, idx + len(word))):
            return idx
        idx = s.find(word, idx + 1)
    return -1


def repair_heritage(decl: str) -> str:
    """Drop top-level function-type entries from implements/extends lists."""
    def fix_segment(seg: str) -> str:
        entries = [e for e in split_top_level(seg) if not e.startswith("(")]
        return ", ".join(entries)

    impl_at = find_top_level(decl, " implements ")
    impl_seg = None
    if impl_at != -1:
        impl_seg = decl[impl_at + len(" implements "):]
        decl = decl[:impl_at]
    ext_at = find_top_level(decl, " extends ")
    ext_seg = None
    if ext_at != -1:
        ext_seg = decl[ext_at + len(" extends "):]
        decl = decl[:ext_at]

    out = decl.rstrip()
    if ext_seg is not None:
        # class extends is a single supertype; interface extends is a list
        fixed = fix_segment(ext_seg)
        if fixed:
            out += " extends " + fixed
    if impl_seg is not None:
        fixed = fix_segment(impl_seg)
        if fixed:
            out += " implements " + fixed
    return out + " "


def main():
    deleted, repaired, kept_referenced = [], [], []

    # --- pass 1: collect deletion candidates -------------------------------
    candidates = {}  # resolved absolute path (no suffix ambiguity) -> reason
    for p in TYPES.rglob("*.d.ts"):
        if p.name == "package-info.d.ts":
            candidates[p] = "package-info"
            continue
        try:
            text = p.read_text(encoding="utf-8")
        except Exception:
            continue
        names = EXPORT_NAME.findall(text)
        if names and any(not IDENT.match(n) for n in names):
            candidates[p] = "invalid identifier: " + ", ".join(
                n for n in names if not IDENT.match(n))

    # --- pass 2: safety — is any candidate imported from outside the set? --
    referenced = set()
    if candidates:
        cand_resolved = {c.resolve() for c in candidates}
        for p in TYPES.rglob("*.d.ts"):
            if p.resolve() in cand_resolved:
                continue
            try:
                text = p.read_text(encoding="utf-8")
            except Exception:
                continue
            for spec in IMPORT_SPEC.findall(text):
                if not spec.startswith("."):
                    continue
                t = (p.parent / spec).resolve()
                for probe in (t, t.with_name(t.name + ".d.ts")):
                    if probe in cand_resolved:
                        referenced.add(probe)

    for p, reason in sorted(candidates.items()):
        if p.resolve() in referenced:
            kept_referenced.append((p, reason))
            continue
        p.unlink()
        deleted.append((p, reason))

    # --- pass 3: heritage repair -------------------------------------------
    for p in TYPES.rglob("*.d.ts"):
        try:
            text = p.read_text(encoding="utf-8")
        except Exception:
            continue
        if "=>" not in text:
            continue

        def sub(m):
            return repair_heritage(m.group(1)) + "{"

        new = DECL_LINE.sub(sub, text)
        if new != text:
            p.write_text(new, encoding="utf-8")
            repaired.append(p)

    pkg_info = sum(1 for _, r in deleted if r == "package-info")
    bad_name = len(deleted) - pkg_info
    print(f"sanitize-invalid-dts: deleted {pkg_info} package-info + "
          f"{bad_name} invalid-name files, repaired {len(repaired)} "
          f"heritage clauses"
          + (f", KEPT {len(kept_referenced)} referenced candidates"
             if kept_referenced else ""))
    for p, reason in kept_referenced:
        print(f"  WARNING kept (referenced from outside): {p} ({reason})",
              file=sys.stderr)


if __name__ == "__main__":
    main()
