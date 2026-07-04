#!/usr/bin/env python3
"""
Positive-control tests for check-output-sanity.py - the fail-closed gate that
catches SILENTLY BROKEN regen output (the BlockItemId/gitignore drop class of
bug). A gate is only worth anything if it actually fires on the bug it exists
for, so each case here builds a minimal fixture package tree that replicates one
real failure mode and asserts the gate exits NON-ZERO on it, plus a clean
fixture that asserts exit 0.

Fixtures mirror the real package layout the gate reads:
    <pkg>/types/**/*.d.ts
    <pkg>/registry-lb/index.d.ts     (typeof import("../types/...") entries)
    <pkg>/registry-full/index.d.ts

Run:  python3 tools/regen/test-output-sanity.py     (exit 0 = all cases pass)
"""
from __future__ import annotations

import subprocess
import sys
import tempfile
from pathlib import Path

HERE = Path(__file__).resolve().parent
GATE = HERE / "check-output-sanity.py"


def build_pkg(root: Path, *, types: list[str], reg_lb: list[str], reg_full: list[str]) -> None:
    """Create a fixture package. `types` are relative paths under types/ (each
    gets an emitted .d.ts); `reg_lb`/`reg_full` are the type paths each registry
    references via `typeof import("../types/<path>")` (a ref whose target isn't
    in `types` is a dangling reference - the BlockItemId bug)."""
    for rel in types:
        f = root / "types" / (rel + ".d.ts")
        f.parent.mkdir(parents=True, exist_ok=True)
        cls = rel.rsplit("/", 1)[-1]
        f.write_text(f"export class {cls} {{}}\n", encoding="utf-8")
    for variant, refs in (("registry-lb", reg_lb), ("registry-full", reg_full)):
        idx = root / variant / "index.d.ts"
        idx.parent.mkdir(parents=True, exist_ok=True)
        lines = ["export interface JavaTypeRegistry {"]
        for rel in refs:
            cls = rel.rsplit("/", 1)[-1]
            fqn = rel.replace("/", ".")
            lines.append(f'  "{fqn}": typeof import("../types/{rel}").{cls};')
        lines.append("}")
        idx.write_text("\n".join(lines) + "\n", encoding="utf-8")


def run_gate(pkg: Path, *args: str) -> tuple[int, str]:
    p = subprocess.run(
        [sys.executable, str(GATE), str(pkg), *args],
        capture_output=True, text=True,
    )
    return p.returncode, p.stdout + p.stderr


def main() -> int:
    # (name, builder-args, gate-args, expect_rc, expect_substr)
    # A clean case expects rc 0. A catch case expects rc 1 (the "problem"
    # exit - NOT 2, which is a bad-pkg-root arg error) AND a substring proving
    # the gate failed for the RIGHT reason, not incidentally.
    cases = [
        # 1. Clean tree: 3 emitted types, every registry ref resolves. -> exit 0.
        ("clean",
         dict(types=["a/A", "b/B", "c/C"], reg_lb=["a/A", "b/B"], reg_full=["a/A", "b/B", "c/C"]),
         ["--min-types", "3"], 0, "OK"),

        # 2. Dangling registry ref (the BlockItemId/gitignore drop): registry-lb
        #    references a class whose .d.ts was dropped from types/.
        ("dangling-registry-lb (BlockItemId)",
         dict(types=["net/minecraft/references/ItemBlockId"],
              reg_lb=["net/minecraft/references/BlockItemId"],  # BlockItemId.d.ts absent
              reg_full=["net/minecraft/references/ItemBlockId"]),
         ["--min-types", "1"], 1, "dangling reference"),

        # 2b. Same drop but in registry-full (both variants must be checked).
        ("dangling-registry-full",
         dict(types=["a/A"], reg_lb=["a/A"], reg_full=["a/A", "a/Gone"]),  # Gone.d.ts absent
         ["--min-types", "1"], 1, "dangling reference"),

        # 3. Floor breach: fewer emitted types than --min-types (catastrophic drop).
        ("floor-breach",
         dict(types=["a/A", "b/B"], reg_lb=["a/A"], reg_full=["a/A"]),
         ["--min-types", "5"], 1, "floor"),  # only 2 < 5

        # 4. Shrink breach: above the floor but shrank far past --max-shrink-pct
        #    vs a baseline (a smaller-but-still-large silent drop vs main).
        ("shrink-breach",
         dict(types=["a/A", "b/B", "c/C"], reg_lb=["a/A"], reg_full=["a/A"]),
         ["--min-types", "1", "--baseline-count", "100", "--max-shrink-pct", "2"], 1, "shrank"),

        # 5. Within allowed shrink: count held steady, under --max-shrink-pct.
        ("shrink-within-tolerance",
         dict(types=["a/A", "b/B", "c/C", "d/D", "e/E"], reg_lb=["a/A"], reg_full=["a/A"]),
         ["--min-types", "1", "--baseline-count", "5", "--max-shrink-pct", "50"], 0, "OK"),
    ]

    fail = 0
    print(f"{'case':<38} {'rc':>3}  {'want':>4}  {'reason-substr':<20} status")
    with tempfile.TemporaryDirectory() as td:
        for i, (name, build_args, gate_args, want_rc, substr) in enumerate(cases):
            pkg = Path(td) / f"case{i}"
            build_pkg(pkg, **build_args)
            rc, out = run_gate(pkg, *gate_args)
            ok = (rc == want_rc) and (substr in out)
            status = "OK" if ok else "MISMATCH"
            if not ok:
                fail = 1
            print(f"{name:<38} {rc:>3}  {want_rc:>4}  {substr:<20} {status}")

    print()
    if fail:
        print("FAILURES PRESENT - the gate did not behave as expected.")
    else:
        print("ALL CASES PASS - output-sanity gate fires (rc 1 + right reason) on each silent-drop mode.")
    return fail


if __name__ == "__main__":
    raise SystemExit(main())
