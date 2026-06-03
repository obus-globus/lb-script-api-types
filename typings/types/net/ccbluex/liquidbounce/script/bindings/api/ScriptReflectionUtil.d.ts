import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Field } from '../../../../../../java/lang/reflect/Field.d.ts'
import type { Method } from '../../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../kotlin/Pair.d.ts'
import type { Triple } from '../../../../../../kotlin/Triple.d.ts'
export class ScriptReflectionUtil extends Object {
    constructor()
    // private fieldCache: Map<Pair<Class<Object>, string>, Field>;
    // private methodCache: Map<Triple<Class<Object>, string, Class<Object>[]>, Method>;
    // private primitiveTypeMap: Map<Class<Object>, Class<Object> | null>;
    classByName(name: string): Class<Object>;
    // private findMethodInternal(clazz: Class<Object>, name: string, args: (Object | null)[], methodProvider: (param0: Class<Object>) => Method[]): Method;
    /**
     * Get the value of a declared field from class
     *
     * @param clazz - class for which to search
     * @param name - method name in yarn mapping
     * @returns - the value stored in field
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptReflectionUtil.kt#L89 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptReflectionUtil.kt:89}
     */
    getDeclaredField(clazz: Class<Object>, name: string): Object | null;
    /**
     * Get the value of a declared field from an object
     *
     * @param obj - object from which to extract
     * @param name - method name in yarn mapping
     * @returns - the value stored in field
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptReflectionUtil.kt#L69 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptReflectionUtil.kt:69}
     */
    getField(obj: Object, name: string): Object | null;
    /**
     * Invalidate the cache.
     * Allows user to invalidate the cache for whatever reason, like dynamic class loading.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptReflectionUtil.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptReflectionUtil.kt:35}
     */
    invalidateCache(): void;
    /**
     * Invoke method(**ONLY OF THIS CLASS WITHOUT INHERITED METHODS**) with no access restrictions based on method name,
     * match overloaded methods based on number and type of arguments
     * does **NOT** handle null arguments
     *
     * @param clazz - class with declared methods
     * @param name - method name in yarn mapping
     * @param args - arguments of method
     * @returns - result of invoking method
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptReflectionUtil.kt#L151 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptReflectionUtil.kt:151}
     */
    invokeDeclaredMethod(clazz: Class<Object>, name: string, args: (Object | null)[]): Object | null;
    /**
     * Invoke method(**PUBLIC ONLY**) based on method name on an object,
     * match overloaded methods based on number and type of arguments,
     * does **NOT** handle null arguments
     *
     * @exception - throw IllegalArgumentException when an argument is null
     *
     * Example when used in js:
     * ```javascript
     *   mod.on("overlayRender", (event) => {
     *     if (!mc.player || !mc.world)
     *       return;
     *
     *     ReflectionUtil.invokeMethod(event.context, "fill", 100, 100, 200, 200, -1);
     *   })
     * ```
     *
     * @param obj - object to be invoked
     * @param name - method name in yarn mapping
     * @param args - arguments of method
     * @returns - result of invoking method
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptReflectionUtil.kt#L122 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptReflectionUtil.kt:122}
     */
    invokeMethod(obj: Object, name: string, args: (Object | null)[]): Object | null;
    newInstance(clazz: Class<Object>, args: (Object | null)[]): Object | null;
    newInstanceByName(name: string, args: (Object | null)[]): Object | null;
    newInstanceByObject(obj: Object, args: (Object | null)[]): Object | null;
}