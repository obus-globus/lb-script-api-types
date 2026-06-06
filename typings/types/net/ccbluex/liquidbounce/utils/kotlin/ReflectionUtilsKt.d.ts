import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReflectionUtilsKt extends Object {
    /**
     * Check if the class is not the root class.
     *
     * The root class is the class {@link Record} or {@link Object}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ReflectionUtils.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ReflectionUtils.kt:31}
     */
    static isNotRoot(paramarg0: Class<Object>): boolean;
    static toFullString(type: Type): string;
}