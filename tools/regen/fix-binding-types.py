#!/usr/bin/env python3
"""Idempotent post-patch correcting type-gen bugs the reflection generator emits.

Found while building NodeFlow (obus-globus/lb-nodeflow, docs/09-type-gen-fixes):

  F1  ambient.d.ts emits a duplicated import + `export const` block
      (Vec3/Mth/InteractionHand/Axis appear twice) -> dedupe.
  F2  PolyglotScript category JSDoc lists a non-existent "Client" category
      (ModuleCategories has only 8; "Client" NPEs at runtime) -> drop it.
  F4  SilentHotbar has a generated type but is not exposed as an ambient
      global -> add the import + `export const`.
  F5  ScriptInteractionUtil.attackEntityJs is @JvmName("attackEntity"), so the
      runtime member is `attackEntity`; the type emits the Kotlin name and is
      wrong -> rename to attackEntity. STAYS A POST-PATCH (not fixed at the
      generator root): KFunction.javaMethod is null for @JvmName-renamed
      functions and @JvmName is CLASS-retained (invisible to reflection), so the
      generator cannot recover the runtime name without fragile signature
      matching. See lb-nodeflow/docs/09-type-gen-fixes.md (F5).

  F1/F2/F6 are now emitted correctly by the generator (ts-defgen.js / the
  post-patches.sh category list); their branches below are idempotent no-ops on a
  fresh regen and kept only as a safety net. F4 and F5 are the live edits.
  F6  InteractionHand is bound under the runtime global name `Hand`; the type
      only exports `InteractionHand` -> add a `Hand` alias (keep InteractionHand).

  F7  field/method name collisions (Java allows a field + method to share a name;
      TS forbids it, so the field shadows the method). Lives in the sibling
      `fix-member-collisions.py` (runs right after this in post-patches.sh).

Usage: fix-binding-types.py [path/to/typings]
"""
import re
import sys
import pathlib

PKG = (pathlib.Path(sys.argv[1]) if len(sys.argv) > 1
       else pathlib.Path(__file__).resolve().parents[2] / "typings")
amb = PKG / "ambient/ambient.d.ts"
poly = PKG / "types/net/ccbluex/liquidbounce/script/PolyglotScript.d.ts"
inter = PKG / "types/net/ccbluex/liquidbounce/script/bindings/api/ScriptInteractionUtil.d.ts"

changed = []

# --- F1: dedupe duplicate value-imports and `export const` decls in ambient ---
lines = amb.read_text().splitlines()
seen_imports, seen_consts, out = set(), set(), []
for line in lines:
    s = line.strip()
    if re.match(r'import \{ .* \} from ".*";?$', s):
        if s in seen_imports:
            continue
        seen_imports.add(s)
    else:
        m = re.match(r'export const (\w+)\s*:', s)
        if m:
            if m.group(1) in seen_consts:
                continue
            seen_consts.add(m.group(1))
    out.append(line)
amb_text = "\n".join(out) + "\n"
if amb_text != amb.read_text():
    changed.append("F1 dedupe")

# --- F6: add `Hand` alias next to InteractionHand ---
if "export const Hand:" not in amb_text:
    amb_text = amb_text.replace(
        "export const InteractionHand: typeof InteractionHand_;",
        "export const InteractionHand: typeof InteractionHand_;\n\n"
        "    /** Runtime global is `Hand` (InteractionHand is bound under that name). */\n"
        "    export const Hand: typeof InteractionHand_;",
        1,
    )
    changed.append("F6 Hand alias")

# --- F4: expose SilentHotbar as an ambient global ---
if "SilentHotbar as SilentHotbar_" not in amb_text:
    amb_text = amb_text.replace(
        'import "../augmentations/index.d.ts"',
        'import "../augmentations/index.d.ts"\n'
        'import { SilentHotbar as SilentHotbar_ } from '
        '"../types/net/ccbluex/liquidbounce/utils/client/SilentHotbar";',
        1,
    )
    anchor = "export const Hand: typeof InteractionHand_;"
    if anchor in amb_text:
        amb_text = amb_text.replace(
            anchor,
            anchor + "\n\n    /** SilentHotbar.INSTANCE — silent hotbar slot selection. */\n"
            "    export const SilentHotbar: typeof SilentHotbar_;",
            1,
        )
        changed.append("F4 SilentHotbar global")

amb.write_text(amb_text)

# --- F2: drop the bogus "Client" category from PolyglotScript JSDoc ---
if poly.exists():
    pt = poly.read_text()
    pt2 = pt.replace(' | "Client"', '').replace('"Client" | ', '')
    if pt2 != pt:
        poly.write_text(pt2)
        changed.append("F2 drop Client category")

# --- F5: attackEntityJs -> attackEntity (runtime @JvmName) ---
if inter.exists():
    it = inter.read_text()
    it2 = it.replace("attackEntityJs(", "attackEntity(")
    if it2 != it:
        inter.write_text(it2)
        changed.append("F5 attackEntity rename")

print("fix-binding-types: " + (", ".join(changed) if changed else "no changes (already applied)"))
