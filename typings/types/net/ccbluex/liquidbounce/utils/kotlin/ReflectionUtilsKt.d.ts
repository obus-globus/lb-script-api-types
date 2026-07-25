import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReflectionUtilsKt extends Object {
    /**
     * Check if the class is not the root class.
     *
     * The root class is the class {@link Record} or {@link Object}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cf742eb17a33041e582f6f30822aab3e8450edf8/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ReflectionUtils.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ReflectionUtils.kt:37}
     */
    static isNotRoot(self: Class<Object> | null): boolean;
    static toFullString(self: Type): string;
}