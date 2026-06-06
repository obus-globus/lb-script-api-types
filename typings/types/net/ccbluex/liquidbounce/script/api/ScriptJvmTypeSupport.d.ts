import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * Constants and utilities for JVM type loading in scripts
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/script/api/ScriptJvmTypeSupport.kt#L21 | src/main/kotlin/net/ccbluex/liquidbounce/script/api/ScriptJvmTypeSupport.kt:21}
 */
export class ScriptJvmTypeSupport extends Object {
    static INSTANCE: ScriptJvmTypeSupport;
    /**
     * The prefix used for JVM type imports in scripts
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/script/api/ScriptJvmTypeSupport.kt#L26 | src/main/kotlin/net/ccbluex/liquidbounce/script/api/ScriptJvmTypeSupport.kt:26}
     */
    static JVM_TYPES_PREFIX: string;
    JVM_TYPES_PREFIX: string;
}