import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Field } from '../../../../../../java/lang/reflect/Field.d.ts'
import type { Method } from '../../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../kotlin/Pair.d.ts'
import type { Triple } from '../../../../../../kotlin/Triple.d.ts'
export class ScriptReflectionUtil extends Object {
    constructor()
    // private fieldCache: JavaMap<Pair<Class<Object>, string>, Field>;
    // private methodCache: JavaMap<Triple<Class<Object>, string, Class<Object>[]>, Method>;
    // private primitiveTypeMap: JavaMap<Class<Object>, Class<Object> | null>;
    /**
     * Resolves a Java class by its fully-qualified name (accepts `/` or `.` separators).
     *
     * @param name the class name to resolve
     */
    classByName(name: string): Class<Object>;
    // private findMethodInternal(clazz: Class<Object>, name: string, args: (Object | null)[], methodProvider: (param0: Class<Object>) => Method[]): Method;
    /**
     * Get the value of a declared field from class
     *
     * @param clazz - class for which to search
     * @param name - method name in yarn mapping
     * @returns - the value stored in field
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptReflectionUtil.kt#L97 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptReflectionUtil.kt:97}
     */
    getDeclaredField(clazz: Class<Object>, name: string): Object | null;
    /**
     * Get the value of a declared field from an object
     *
     * @param obj - object from which to extract
     * @param name - method name in yarn mapping
     * @returns - the value stored in field
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptReflectionUtil.kt#L77 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptReflectionUtil.kt:77}
     */
    getField(obj: Object, name: string): Object | null;
    /**
     * Invalidate the cache.
     * Allows user to invalidate the cache for whatever reason, like dynamic class loading.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptReflectionUtil.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptReflectionUtil.kt:39}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptReflectionUtil.kt#L163 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptReflectionUtil.kt:163}
     */
    invokeDeclaredMethod(clazz: Class<Object>, name: string, ...args: (Object | null)[]): Object | null;
    /**
     * Invoke method(**PUBLIC ONLY**) based on method name on an object,
     * match overloaded methods based on number and type of arguments,
     * does **NOT** handle null arguments
     *
     * @param obj - object to be invoked
     * @param name - method name in yarn mapping
     * @param args @exception - throw IllegalArgumentException when an argument is null  Example when used in js: ```javascript   mod.on("overlayRender", (event) => {     if (!mc.player || !mc.world)       return;      ReflectionUtil.invokeMethod(event.context, "fill", 100, 100, 200, 200, -1);   }) ```
     * @returns - result of invoking method
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptReflectionUtil.kt#L145 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptReflectionUtil.kt:145}
     */
    invokeMethod(obj: Object, name: string, ...args: (Object | null)[]): Object | null;
    /**
     * Constructs a new instance of the class using the declared constructor matching the given arguments.
     *
     * @param clazz the class to instantiate
     * @param args the constructor arguments
     */
    newInstance(clazz: Class<Object>, ...args: (Object | null)[]): Object | null;
    /**
     * Resolves a class by name and constructs a new instance using the declared constructor matching the given arguments.
     *
     * @param name the class name to instantiate
     * @param args the constructor arguments
     */
    newInstanceByName(name: string, ...args: (Object | null)[]): Object | null;
    /**
     * Constructs a new instance of the given object's class using the declared constructor matching the given arguments.
     *
     * @param obj an object whose class to instantiate
     * @param args the constructor arguments
     */
    newInstanceByObject(obj: Object, ...args: (Object | null)[]): Object | null;
}