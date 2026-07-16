#!/usr/bin/env python3
"""Idempotent post-patch correcting type-gen bugs the reflection generator emits.

Found while building NodeFlow (obus-globus/lb-nodeflow, docs/09-type-gen-fixes):

  F1  ambient.d.ts emits a duplicated import + `export const` block
      (Vec3/Mth/InteractionHand/Axis appear twice) -> dedupe.
  F2  PolyglotScript category JSDoc lists a non-existent "Client" category
      (ModuleCategories has only 8; "Client" NPEs at runtime) -> drop it.
  F4  REVERSED (2026-06-09): SilentHotbar is NOT a runtime global - no
      `putMember("SilentHotbar", ...)` exists anywhere in LiquidBounce (verified
      at pin b759cac57 and at nextgen HEAD). The old F4 *added* an ambient
      `export const SilentHotbar`, which typechecked code that throws
      ReferenceError at runtime. F4 now REMOVES that export if present. Scripts
      reach it via `Java.type("net.ccbluex.liquidbounce.utils.client.SilentHotbar").INSTANCE`
      (see README recipes); the generated SilentHotbar.d.ts type stays importable.
  F5  ScriptInteractionUtil.attackEntityJs is @JvmName("attackEntity"), so the
      runtime member is `attackEntity`; the type emits the Kotlin name and is
      wrong -> rename to attackEntity. STAYS A POST-PATCH (not fixed at the
      generator root): KFunction.javaMethod is null for @JvmName-renamed
      functions and @JvmName is CLASS-retained (invisible to reflection), so the
      generator cannot recover the runtime name without fragile signature
      matching. See lb-nodeflow/docs/09-type-gen-fixes.md (F5).
  F8  `localStorage` is bound to a Java ConcurrentHashMap<String, Any>
      (ScriptContextProvider), but the generator never emits
      java/util/concurrent/ConcurrentHashMap.d.ts (JDK platform classes are not
      on the scanned classpath), so ambient imported a nonexistent module and
      `localStorage` degraded to `any` (or, with lib.dom loaded, silently
      resolved to DOM Storage). Replace the import with an inline
      ScriptLocalStorage facade matching the Java Map surface.
  F9  `Axis` / `RotationAxis` are bound as `Axis::class.java` - a host CLASS
      handle whose usable surface is the static constants XN/XP/YN/YP/ZN/ZP
      (+ static of(Vector3f)) - but ts-defgen types them as the *instance*
      interface (only rotation()/rotationDegrees()). Retype both as an
      AxisClassHandle facade exposing the statics.

  F1/F2/F6 are now emitted correctly by the generator (ts-defgen.js / the
  post-patches.sh category list); their branches below are idempotent no-ops on a
  fresh regen and kept only as a safety net. F4 (removal), F5, F8 and F9 are the
  live edits.
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

# --- F4 (reversed): REMOVE the fictional SilentHotbar ambient global ---
# LiquidBounce never binds "SilentHotbar" into script contexts; the export made
# `SilentHotbar.INSTANCE...` typecheck and then ReferenceError at runtime.
_before = amb_text
amb_text = re.sub(
    r'\n?import \{ SilentHotbar as SilentHotbar_ \} from\s*'
    r'"\.\./types/net/ccbluex/liquidbounce/utils/client/SilentHotbar";',
    "", amb_text)
amb_text = re.sub(
    r'\n*(?:    /\*\* SilentHotbar\.INSTANCE[^\n]*\*/\n)?'
    r'    export const SilentHotbar: typeof SilentHotbar_;',
    "", amb_text)
if amb_text != _before:
    changed.append("F4 removed fictional SilentHotbar global")

# --- F8: localStorage - replace the broken ConcurrentHashMap import with an
# honest facade. The generator imports java/util/concurrent/ConcurrentHashMap,
# which it never emits (JDK classes are off the scanned classpath), so the
# import is unresolvable and localStorage silently loses its type.
F8_BEGIN = "// F8: ScriptLocalStorage facade begin"
F8_END = "// F8: ScriptLocalStorage facade end"
_before = amb_text
amb_text = re.sub(
    r'\n?import \{ ConcurrentHashMap as ConcurrentHashMap_ \} from\s*'
    r'"\.\./types/java/util/concurrent/ConcurrentHashMap";',
    "", amb_text)
_facade_present = F8_BEGIN in amb_text
if True:
    facade = f"""    {F8_BEGIN}
    /**
     * The shared script storage - at runtime a Java
     * `ConcurrentHashMap<String, Any>` bound by `ScriptContextProvider`
     * (NOT the DOM `localStorage` / Web Storage API). Java `Map` member
     * access: `get`/`put`/`remove`/..., values are arbitrary host or guest
     * objects. In-memory only; cleared when scripts reload.
     */
    interface ScriptLocalStorage {{
        /** Value for `key`, or `null` if absent. */
        get(key: string): any;
        /** Stores `value`; returns the previous value or `null`. */
        put(key: string, value: any): any;
        /** Stores only if absent; returns the existing value or `null`. */
        putIfAbsent(key: string, value: any): any;
        getOrDefault(key: string, defaultValue: any): any;
        /** Removes `key`; returns the removed value or `null`. */
        remove(key: string): any;
        containsKey(key: string): boolean;
        clear(): void;
        size(): number;
        isEmpty(): boolean;
        /** Computes a value for `key` (creating it if absent). */
        compute(key: string, remap: (key: string, value: any) => any): any;
        /** Computes and stores a value only if `key` is absent. */
        computeIfAbsent(key: string, mapping: (key: string) => any): any;
        /** Merges `value` into the existing value for `key`. */
        merge(key: string, value: any, remap: (oldValue: any, value: any) => any): any;
        /** Replaces the value for `key` only if it is currently present. */
        replace(key: string, value: any): any;
        /** Runs `action` for every entry. */
        forEach(action: (key: string, value: any) => void): void;
        /** The key set (a live Java Set view). */
        keySet(): any;
        /** The entry set (a live Java Set view). */
        entrySet(): any;
        /** The values collection (a live Java Collection view). */
        values(): any;
    }}
    {F8_END}
"""
    if _facade_present:
        # Upgrade the existing block in place (adds the extended Map members).
        # Consume the begin line's own indentation so the replacement's indent
        # isn't stacked on top of it (each re-run would otherwise add 4 spaces).
        amb_text = re.sub(
            r"[ \t]*" + re.escape(F8_BEGIN) + r".*?" + re.escape(F8_END) + r"\n",
            facade, amb_text, count=1, flags=re.S)
    else:
        intrinsics_end = "    // T-4: GraalVM intrinsics end\n"
        if intrinsics_end in amb_text:
            amb_text = amb_text.replace(intrinsics_end, intrinsics_end + "\n" + facade, 1)
        else:
            amb_text = amb_text.replace("declare global {\n", "declare global {\n" + facade, 1)
amb_text = amb_text.replace(
    "export const localStorage: ConcurrentHashMap_;",
    "export const localStorage: ScriptLocalStorage;", 1)
if amb_text != _before:
    changed.append("F8 localStorage facade")

# --- F9: Axis / RotationAxis - class-handle facade with the static constants.
# Runtime binds `Axis::class.java`; the usable surface is Axis.XP/.YP/... and
# Axis.of(Vector3f), none of which exist on the generated instance interface.
F9_BEGIN = "// F9: Axis class-handle facade begin"
F9_END = "// F9: Axis class-handle facade end"
_before = amb_text
if ("Vector3f as Vector3f_" not in amb_text
        and ("export const Axis: Axis_;" in amb_text
             or "export const RotationAxis: Axis_;" in amb_text)):
    amb_text = amb_text.replace(
        'import { Axis as Axis_ } from "../types/com/mojang/math/Axis";',
        'import { Axis as Axis_ } from "../types/com/mojang/math/Axis";\n'
        'import { Vector3f as Vector3f_ } from "../types/org/joml/Vector3f";',
        1,
    )
F9_FACADE = f"""    {F9_BEGIN}
    interface AxisClassStatics {{
        /** Negative X axis. */ readonly XN: Axis_;
        /** Positive X axis. */ readonly XP: Axis_;
        /** Negative Y axis. */ readonly YN: Axis_;
        /** Positive Y axis. */ readonly YP: Axis_;
        /** Negative Z axis. */ readonly ZN: Axis_;
        /** Positive Z axis. */ readonly ZP: Axis_;
        /** Axis along an arbitrary (normalised) vector. */
        of(axis: Vector3f_): Axis_;
    }}
    /**
     * The `com.mojang.math.Axis` binding is a raw `java.lang.Class` value;
     * its statics are reachable ONLY via `.static` (GraalJS nashorn-compat,
     * verified live): `RotationAxis.static.YP.rotationDegrees(90)`.
     */
    interface AxisClassHandle {{
        readonly static: AxisClassStatics;
    }}
    {F9_END}
"""
if F9_BEGIN in amb_text and "AxisClassStatics" not in amb_text:
    # migrate the old flat facade (statics claimed directly on the handle)
    amb_text = re.sub(
        r"    " + re.escape(F9_BEGIN) + r".*?" + re.escape(F9_END) + r"\n",
        F9_FACADE, amb_text, count=1, flags=re.S)
elif F9_BEGIN not in amb_text and (
        "export const Axis: Axis_;" in amb_text
        or "export const RotationAxis: Axis_;" in amb_text):
    intrinsics_end = "    // T-4: GraalVM intrinsics end\n"
    if intrinsics_end in amb_text:
        amb_text = amb_text.replace(intrinsics_end, intrinsics_end + "\n" + F9_FACADE, 1)
    else:
        amb_text = amb_text.replace("declare global {\n", "declare global {\n" + F9_FACADE, 1)
amb_text = amb_text.replace(
    "export const Axis: Axis_;", "export const Axis: AxisClassHandle;", 1)
amb_text = amb_text.replace(
    "export const RotationAxis: Axis_;",
    "export const RotationAxis: AxisClassHandle;", 1)
if amb_text != _before:
    changed.append("F9 Axis/RotationAxis class-handle facade")

# --- F10: class-value bindings - statics live behind `.static` ---------------
# `putMember(name, X::class.java)` hands scripts a raw java.lang.Class VALUE.
# Verified in a live client (GraalJS nashorn-compat): `new X(...)` constructs
# directly, but `X.MAIN_HAND` / `X.clamp(...)` are UNDEFINED - statics (incl.
# enum constants) are only reachable via `X.static.<member>`. The plain
# `typeof X_` typing claimed direct statics, so e.g. `Hand.MAIN_HAND`
# typechecked and silently passed undefined at runtime. Rewrite every
# class-handle binding (kind per ambient/runtime-bindings.json) to
# JavaClassBinding<typeof X_>. Skips when the sidecar is absent.
F10_HELPER_MARK = "// F10: JavaClassBinding helper begin"
bindings_sidecar = PKG / "ambient/runtime-bindings.json"
if bindings_sidecar.exists():
    import json as _json
    _before = amb_text
    _bindings = _json.loads(bindings_sidecar.read_text())
    class_binding_names = sorted(
        n for n, b in _bindings.items() if b.get("kind") == "class-handle")
    _helper_present = F10_HELPER_MARK in amb_text
    _helper_current = "readonly class: Class_<" in amb_text
    if (not _helper_present or not _helper_current) and class_binding_names:
        helper = """    // F10: JavaClassBinding helper begin
    /**
     * A raw `java.lang.Class` value bound into the script context. Under
     * GraalJS nashorn-compat it constructs directly (`new BlockPos(1, 2, 3)`),
     * but STATIC members - including enum constants - are only reachable via
     * `.static`: `Hand.static.MAIN_HAND`, `MathHelper.static.clamp(...)`.
     * Direct static access returns `undefined` at runtime. `.static` also
     * carries the full constructor-overload set: `new (BlockPos.static)(...)`.
     * `.class` is the underlying `java.lang.Class` (for reflection APIs).
     */
    type JavaClassBinding<T> = (T extends abstract new (...args: infer A) => infer R
        ? { new (...args: A): R; readonly class: Class_<R> }
        : { readonly class: Class_<any> }) & { readonly static: T };
    // F10: JavaClassBinding helper end
"""
        F10_END = "    // F10: JavaClassBinding helper end\n"
        if _helper_present:
            # Upgrade the existing helper block in place (adds `.class`).
            # Consume the begin line's indentation (see the F8 note above).
            amb_text = re.sub(
                r"[ \t]*" + re.escape(F10_HELPER_MARK) + r".*?" + re.escape(F10_END) + r"\n",
                helper, amb_text, count=1, flags=re.S)
        else:
            intrinsics_end = "    // T-4: GraalVM intrinsics end\n"
            if intrinsics_end in amb_text:
                amb_text = amb_text.replace(intrinsics_end, intrinsics_end + "\n" + helper, 1)
            else:
                amb_text = amb_text.replace("declare global {\n", "declare global {\n" + helper, 1)
    for name in class_binding_names:
        amb_text = re.sub(
            rf"export const {re.escape(name)}: typeof (\w+)_;",
            rf"export const {name}: JavaClassBinding<typeof \1_>;",
            amb_text, count=1)
    if amb_text != _before:
        changed.append(f"F10 .static class bindings ({len(class_binding_names)})")
else:
    print("fix-binding-types: F10 skipped - no runtime-bindings.json yet", file=sys.stderr)

# --- F11: typed Java.type - string-literal registry overload ----------------
# Ambient declares an EMPTY JavaTypeRegistry merge target + an overload that
# maps class-name literals through it. Zero cost / no behavior change by
# default (keyof {} = never, calls fall through to the generic overload);
# the generated registry-lb / registry-full packages populate it when a
# consumer opts in via tsconfig "types". Works for plain-JS users through
# the editor language service.
F11_IFACE = """    /** Merge target for the optional Java.type string-literal registry -
     *  add "@wunk/lb-script-api-types/registry-lb" (or registry-full) to your
     *  tsconfig/jsconfig "types" to populate it. Empty by default: zero
     *  compile cost; Java.type falls back to the generic overload. */
    interface JavaTypeRegistry {}

"""
_before = amb_text
if "interface JavaTypeRegistry" not in amb_text:
    amb_text = amb_text.replace("    interface JavaIntrinsic {",
                                F11_IFACE + "    interface JavaIntrinsic {", 1)
if "type<K extends keyof JavaTypeRegistry>" not in amb_text:
    amb_text = amb_text.replace(
        "        type<T = any>(className: string): T;",
        "        type<K extends keyof JavaTypeRegistry>(className: K): JavaTypeRegistry[K];\n"
        "        type<T = any>(className: string): T;", 1)
if amb_text != _before:
    changed.append("F11 Java.type registry overload")

# --- A10: import java.lang.Class for JavaClassBinding's `.class` member ------
# The F10 helper references Class_<...>; ensure the import exists (idempotent).
if "JavaClassBinding" in amb_text and "as Class_ }" not in amb_text:
    class_import = 'import { Class as Class_ } from "../types/java/lang/Class";'
    # Insert after the last top-level import (before `declare global {`).
    amb_text = amb_text.replace("declare global {\n",
                                class_import + "\ndeclare global {\n", 1)
    changed.append("A10 Class import for .class")

# --- A11: GraalJS provides `require` (commonjs-require=true) and `console` ---
# (js.console default on); with lib es2023 (no DOM) neither is declared, so
# console.log / CommonJS require are spurious type errors. Inject into the
# intrinsics block. Idempotent via marker.
A11_MARK = "// A11: require + console begin"
if A11_MARK not in amb_text:
    block = """    {mark}
    /** CommonJS `require` (GraalJS `js.commonjs-require` is enabled). */
    function require(id: string): any;
    /** Console object provided by GraalJS (`js.console`, on by default). */
    const console: {{
        log(...args: unknown[]): void;
        info(...args: unknown[]): void;
        warn(...args: unknown[]): void;
        error(...args: unknown[]): void;
        debug(...args: unknown[]): void;
    }};
    // A11: require + console end
""".format(mark=A11_MARK)
    intrinsics_end = "    // T-4: GraalVM intrinsics end\n"
    if intrinsics_end in amb_text:
        amb_text = amb_text.replace(intrinsics_end, intrinsics_end + "\n" + block, 1)
    else:
        amb_text = amb_text.replace("declare global {\n", "declare global {\n" + block, 1)
    changed.append("A11 require + console globals")

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
