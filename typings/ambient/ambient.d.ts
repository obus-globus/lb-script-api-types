
// ambient.ts
// imports
import "../augmentations/index.d.ts"
import { ScriptSetting as ScriptSetting_ } from "../types/net/ccbluex/liquidbounce/script/bindings/features/ScriptSetting";
import { Vec3i as Vec3i_ } from "../types/net/minecraft/core/Vec3i";
import { Vec3 as Vec3_ } from "../types/net/minecraft/world/phys/Vec3";
import { Mth as Mth_ } from "../types/net/minecraft/util/Mth";
import { BlockPos as BlockPos_ } from "../types/net/minecraft/core/BlockPos";
import { InteractionHand as InteractionHand_ } from "../types/net/minecraft/world/InteractionHand";
import { Axis as Axis_ } from "../types/com/mojang/math/Axis";
import { Vector3f as Vector3f_ } from "../types/org/joml/Vector3f";
import { RenderSystem as RenderSystem_ } from "../types/com/mojang/blaze3d/systems/RenderSystem";
import { Color4b as Color4b_ } from "../types/net/ccbluex/liquidbounce/render/engine/type/Color4b";
import { Minecraft as Minecraft_ } from "../types/net/minecraft/client/Minecraft";
import { ScriptClient as ScriptClient_ } from "../types/net/ccbluex/liquidbounce/script/bindings/api/ScriptClient";
import { ScriptRotationUtil as ScriptRotationUtil_ } from "../types/net/ccbluex/liquidbounce/script/bindings/api/ScriptRotationUtil";
import { ScriptItemUtil as ScriptItemUtil_ } from "../types/net/ccbluex/liquidbounce/script/bindings/api/ScriptItemUtil";
import { ScriptNetworkUtil as ScriptNetworkUtil_ } from "../types/net/ccbluex/liquidbounce/script/bindings/api/ScriptNetworkUtil";
import { ScriptInteractionUtil as ScriptInteractionUtil_ } from "../types/net/ccbluex/liquidbounce/script/bindings/api/ScriptInteractionUtil";
import { ScriptBlockUtil as ScriptBlockUtil_ } from "../types/net/ccbluex/liquidbounce/script/bindings/api/ScriptBlockUtil";
import { ScriptMovementUtil as ScriptMovementUtil_ } from "../types/net/ccbluex/liquidbounce/script/bindings/api/ScriptMovementUtil";
import { ScriptReflectionUtil as ScriptReflectionUtil_ } from "../types/net/ccbluex/liquidbounce/script/bindings/api/ScriptReflectionUtil";
import { ScriptParameterValidator as ScriptParameterValidator_ } from "../types/net/ccbluex/liquidbounce/script/bindings/api/ScriptParameterValidator";
import { ScriptUnsafeThread as ScriptUnsafeThread_ } from "../types/net/ccbluex/liquidbounce/script/bindings/api/ScriptUnsafeThread";
import { ScriptPrimitives as ScriptPrimitives_ } from "../types/net/ccbluex/liquidbounce/script/bindings/api/ScriptPrimitives";
import { ScriptAsyncUtil as ScriptAsyncUtil_ } from "../types/net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil";
import { PolyglotScript as PolyglotScript_ } from "../types/net/ccbluex/liquidbounce/script/PolyglotScript";
declare global {
    // T-4: GraalVM intrinsics begin
    // Truffle/GraalVM host-provided globals — exposed to every polyglot
    // script but invisible to `Object.entries(globalThis)`. See:
    //   https://www.graalvm.org/jdk25/reference-manual/js/JavaInteroperability/
    //   https://www.graalvm.org/jdk25/reference-manual/polyglot-programming/
    interface JavaIntrinsic {
        /** Resolve a Java class by FQN. Returns a "type" handle: callable as
         *  a constructor and indexable for static members. */
        type<T = any>(className: string): T;
        /** Convert a Java array (or Iterable) to a JS array. */
        from<T = unknown>(javaArray: any): T[];
        /** Convert a JS iterable to a Java array of the given element type. */
        to(jsArray: ArrayLike<unknown>, javaType?: string | any): any;
        /** Extend one or more Java classes / interfaces. */
        extend(...types: any[]): any;
        /** Call a superclass method on a Java-extended object. */
        super(obj: any): any;
        /** Run a callback while holding the intrinsic monitor of `lock`. */
        synchronized<T>(fn: () => T, lock: any): T;
        isJavaObject(obj: unknown): boolean;
        isJavaFunction(obj: unknown): boolean;
        isScriptObject(obj: unknown): boolean;
        isScriptFunction(obj: unknown): boolean;
        isType(obj: unknown): boolean;
        typeName(type: any): string;
        asJSONCompatible(obj: any): any;
    }
    const Java: JavaIntrinsic;
    /** GraalVM polyglot bindings — shared key/value space across languages. */
    interface PolyglotIntrinsic {
        import<T = unknown>(name: string): T;
        export<T>(name: string, value: T): void;
        eval<T = unknown>(language: string, source: string): T;
        evalFile<T = unknown>(language: string, source: string): T;
    }
    const Polyglot: PolyglotIntrinsic;
    /** Print to stdout with a trailing newline. */
    function print(...args: unknown[]): void;
    /** Print to stderr with a trailing newline. */
    function printErr(...args: unknown[]): void;
    /** Evaluate JS source from a string, file path, or URL. */
    function load(source: string | { name: string; script: string }): unknown;
    /** Like `load`, but evaluates in a fresh global scope. */
    function loadWithNewGlobal(source: string | { name: string; script: string }, ...args: unknown[]): unknown;
    /** GraalVM runtime metadata. */
    const Graal: {
        readonly language: string;
        readonly versionECMAScript: string;
        readonly versionGraalVM: string;
        readonly isGraalRuntime: boolean;
    };
    /** Worker-thread API (only when js.worker is enabled). */
    const Workers: any;
    // T-4: GraalVM intrinsics end

    // F9: Axis class-handle facade begin
    /**
     * The host class handle for `com.mojang.math.Axis` (bound via
     * `Axis::class.java`). Use the static unit-axis constants — e.g.
     * `RotationAxis.YP.rotationDegrees(90)`.
     */
    interface AxisClassHandle {
        /** Negative X axis. */ readonly XN: Axis_;
        /** Positive X axis. */ readonly XP: Axis_;
        /** Negative Y axis. */ readonly YN: Axis_;
        /** Positive Y axis. */ readonly YP: Axis_;
        /** Negative Z axis. */ readonly ZN: Axis_;
        /** Positive Z axis. */ readonly ZP: Axis_;
        /** Axis along an arbitrary (normalised) vector. */
        of(axis: Vector3f_): Axis_;
    }
    // F9: Axis class-handle facade end

    // F8: ScriptLocalStorage facade begin
    /**
     * The shared script storage — at runtime a Java
     * `ConcurrentHashMap<String, Any>` bound by `ScriptContextProvider`
     * (NOT the DOM `localStorage` / Web Storage API). Java `Map` member
     * access: `get`/`put`/`remove`/..., values are arbitrary host or guest
     * objects. In-memory only; cleared when scripts reload.
     */
    interface ScriptLocalStorage {
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
    }
    // F8: ScriptLocalStorage facade end


// exports
    export const Setting: ScriptSetting_;

    export const mc: Minecraft_;

    export const Client: ScriptClient_;

    export const RotationUtil: ScriptRotationUtil_;

    export const ItemUtil: ScriptItemUtil_;

    export const NetworkUtil: ScriptNetworkUtil_;

    export const InteractionUtil: ScriptInteractionUtil_;

    export const BlockUtil: ScriptBlockUtil_;

    export const MovementUtil: ScriptMovementUtil_;

    export const ReflectionUtil: ScriptReflectionUtil_;

    export const ParameterValidator: ScriptParameterValidator_;

    export const UnsafeThread: ScriptUnsafeThread_;

    export const Primitives: ScriptPrimitives_;

    export const localStorage: ScriptLocalStorage;

    export const AsyncUtil: ScriptAsyncUtil_;

    /**
     * Registers a new script with LiquidBounce. **Must be called exactly once**
     * at the top level of every script — the return value is your script
     * handle (used to register modules, listen for lifecycle events, etc.).
     *
     * @param scriptObject Identity metadata for this script.
     * @param scriptObject.name Display name. Shown in the script manager.
     * @param scriptObject.version Semver-ish version string.
     * @param scriptObject.authors One or more author names.
     * @returns The script handle for chaining further registrations.
     *
     * @example
     * ```ts
     * const script = registerScript({
     *     name: "MyScript",
     *     version: "1.0.0",
     *     authors: ["me"],
     * });
     *
     * script.on("load", () => print("loaded"));
     * ```
     *
     * Source: `PolyglotScript.kt` — `RegisterScript.apply`, KDoc.
     */
    export const registerScript: (scriptObject: { name: string; version: string; authors: string[] }) => PolyglotScript_;

    export const Vec3i: typeof Vec3i_;

    export const Vec3: typeof Vec3_;

    export const Mth: typeof Mth_;

    export const BlockPos: typeof BlockPos_;

    export const InteractionHand: typeof InteractionHand_;

    export const Axis: AxisClassHandle;

    export const RenderSystem: typeof RenderSystem_;

    export const Vec3d: typeof Vec3_;

    export const MathHelper: typeof Mth_;

    export const Hand: typeof InteractionHand_;

    export const RotationAxis: AxisClassHandle;

    export const Color4b: typeof Color4b_;

}
