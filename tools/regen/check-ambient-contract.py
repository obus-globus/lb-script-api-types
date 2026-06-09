#!/usr/bin/env python3
"""Verify ambient.d.ts against RUNTIME truth (runtime-bindings.json).

ts-defgen.js runs inside a live LiquidBounce and dumps every real
script-context binding (name, backing Java class, member names) to
`ambient/runtime-bindings.json`. This checker asserts:

  1. Every `export const X` in ambient.d.ts corresponds to a real runtime
     binding. An export without a binding is a typing that ReferenceErrors
     in real scripts — the F4/SilentHotbar bug class, now structurally
     impossible to ship.
  2. Every runtime binding is exported from ambient. A binding without an
     export means LiquidBounce added a global the typings don't surface
     (or a post-patch wrongly removed one).
  3. The hand-written facades promise only members the runtime actually
     has: Axis/RotationAxis static constants + of(), and the
     ScriptLocalStorage Java-Map surface.

If the sidecar is absent (tree predates the dump, or a SKIP_* regen), the
check is SKIPPED with a warning — it hard-fails only on demonstrable
mismatch.

Usage: check-ambient-contract.py [path/to/typings]
"""
import json
import pathlib
import re
import sys

PKG = (pathlib.Path(sys.argv[1]) if len(sys.argv) > 1
       else pathlib.Path(__file__).resolve().parents[2] / "typings")
AMBIENT = PKG / "ambient" / "ambient.d.ts"
SIDECAR = PKG / "ambient" / "runtime-bindings.json"

AXIS_FACADE = {"XN", "XP", "YN", "YP", "ZN", "ZP", "of"}
LOCALSTORAGE_FACADE = {"get", "put", "putIfAbsent", "getOrDefault", "remove",
                       "containsKey", "clear", "size", "isEmpty"}


def main() -> int:
    if not SIDECAR.is_file():
        print("check-ambient-contract: SKIP — no runtime-bindings.json "
              "(regen with the dumping ts-defgen to enable this gate)")
        return 0
    if not AMBIENT.is_file():
        print(f"check-ambient-contract: FAIL — {AMBIENT} missing", file=sys.stderr)
        return 1

    bindings = json.loads(SIDECAR.read_text(encoding="utf-8"))
    exports = set(re.findall(r"^\s*export const (\w+)\s*:",
                             AMBIENT.read_text(encoding="utf-8"), re.M))

    failures = []

    ghost_exports = exports - set(bindings)
    for name in sorted(ghost_exports):
        failures.append(
            f"ambient exports `{name}` but the runtime has NO such binding — "
            f"scripts using it get a ReferenceError (F4 bug class)")

    unexposed = set(bindings) - exports
    for name in sorted(unexposed):
        failures.append(
            f"runtime binds `{name}` ({bindings[name].get('javaClass')}) but "
            f"ambient does not export it — new upstream global, or a "
            f"post-patch wrongly removed it")

    for name in ("Axis", "RotationAxis"):
        b = bindings.get(name)
        if b is None:
            continue
        missing = AXIS_FACADE - set(b.get("statics", []))
        if missing:
            failures.append(
                f"AxisClassHandle facade promises {sorted(missing)} but the "
                f"runtime class {b.get('javaClass')} lacks them")

    ls = bindings.get("localStorage")
    if ls is not None:
        missing = LOCALSTORAGE_FACADE - set(ls.get("members", []))
        if missing:
            failures.append(
                f"ScriptLocalStorage facade promises {sorted(missing)} but the "
                f"runtime class {ls.get('javaClass')} lacks them")

    if failures:
        print(f"check-ambient-contract: FAIL — {len(failures)} mismatch(es):",
              file=sys.stderr)
        for f in failures:
            print(f"  - {f}", file=sys.stderr)
        return 1

    print(f"check-ambient-contract: OK — {len(exports)} ambient exports all "
          f"backed by runtime bindings; facades verified")
    return 0


if __name__ == "__main__":
    sys.exit(main())
