import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * Constants and utilities for JVM type loading in scripts
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/script/api/ScriptJvmTypeSupport.kt#L24 | src/main/kotlin/net/ccbluex/liquidbounce/script/api/ScriptJvmTypeSupport.kt:24}
 */
export class ScriptJvmTypeSupport extends Object {
    static INSTANCE: ScriptJvmTypeSupport;
    /**
     * The prefix used for JVM type imports in scripts
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/script/api/ScriptJvmTypeSupport.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/script/api/ScriptJvmTypeSupport.kt:29}
     */
    static JVM_TYPES_PREFIX: string;
    JVM_TYPES_PREFIX: string;
}