#!/usr/bin/env python3
"""
Output sanity gate for the auto-regen pipeline.

A regen can succeed and still ship a SILENTLY BROKEN tree (e.g. the unanchored
`references/` .gitignore once dropped net.minecraft.references.* classes while
the registry still referenced them — a dangling import nobody noticed). The
typecheck gate catches *some* of that, but this is a cheap, direct, version-
independent backstop that's meant to be a HARD gate for auto-merge/publish:

  1. registry <-> types consistency: every class the Java.type registries
     (registry-lb, registry-full) reference must have an emitted `.d.ts`.
     This is exactly the BlockItemId failure mode.
  2. floor: the types tree must have at least --min-types files (catches a
     catastrophic drop — half the tree vanishing, etc.).
  3. optional delta: if --baseline-count is given, fail when the new count is
     more than --max-shrink-pct smaller than the baseline (catches a smaller-
     but-still-large silent drop that's above the absolute floor).

Usage:
  check-output-sanity.py <pkg-root> [--min-types N] [--baseline-count N]
                                    [--max-shrink-pct P]

<pkg-root> is the package dir that contains `types/`, `registry-lb/`,
`registry-full/` (e.g. typings/ or tools/regen-output/@ccbluex/...).
Exit 0 = sane, non-zero = a problem that must block an automated release.
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

# Matches the registry entries:
#   "net.minecraft.references.BlockItemId": typeof import("../types/.../BlockItemId").BlockItemId;
# We only need the import target path.
IMPORT_RE = re.compile(r'import\("([^"]+)"\)')


def check_registry(pkg: Path, problems: list[str]) -> int:
    """Verify every registry import target resolves to an emitted .d.ts. Returns
    the number of registry entries checked (for reporting)."""
    checked = 0
    for variant in ("registry-lb", "registry-full"):
        idx = pkg / variant / "index.d.ts"
        if not idx.is_file():
            # registry-lb/full are part of a normal package; absence is itself
            # suspicious, but leave that to the floor check / promote list.
            continue
        text = idx.read_text(encoding="utf-8", errors="replace")
        for m in IMPORT_RE.finditer(text):
            checked += 1
            rel = m.group(1)  # e.g. ../types/net/minecraft/references/BlockItemId
            # Resolve relative to the registry dir; add the .d.ts extension.
            target = (idx.parent / (rel + ".d.ts")).resolve()
            if not target.is_file():
                problems.append(
                    f"{variant}: dangling reference -> {rel} (no {target.name})"
                )
    return checked


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("pkg_root", type=Path)
    ap.add_argument("--min-types", type=int, default=50000,
                    help="absolute floor on emitted .d.ts count (default 50000)")
    ap.add_argument("--baseline-count", type=int, default=0,
                    help="prior types count; fail if shrunk past --max-shrink-pct")
    ap.add_argument("--max-shrink-pct", type=float, default=2.0,
                    help="max %% the types count may shrink vs baseline (default 2)")
    args = ap.parse_args()

    pkg = args.pkg_root
    types_dir = pkg / "types"
    if not types_dir.is_dir():
        print(f"FAIL: {types_dir} not found — wrong --pkg-root?", file=sys.stderr)
        return 2

    problems: list[str] = []

    # 1. registry <-> types consistency (the BlockItemId backstop).
    refs = check_registry(pkg, problems)

    # 2. absolute floor.
    count = sum(1 for _ in types_dir.rglob("*.d.ts"))
    if count < args.min_types:
        problems.append(f"types floor: {count} .d.ts < min {args.min_types}")

    # 3. shrink vs baseline.
    if args.baseline_count > 0:
        shrink = (args.baseline_count - count) / args.baseline_count * 100.0
        if shrink > args.max_shrink_pct:
            problems.append(
                f"types shrank {shrink:.1f}% vs baseline "
                f"({args.baseline_count} -> {count}); max {args.max_shrink_pct}%"
            )

    print(f"output-sanity: {count} types, {refs} registry refs checked")
    if problems:
        print("output-sanity: FAIL", file=sys.stderr)
        for p in problems:
            print(f"  - {p}", file=sys.stderr)
        return 1
    print("output-sanity: OK")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
