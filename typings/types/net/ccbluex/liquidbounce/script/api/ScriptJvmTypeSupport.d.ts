import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * Constants and utilities for JVM type loading in scripts
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/script/api/ScriptJvmTypeSupport.kt#L21 | src/main/kotlin/net/ccbluex/liquidbounce/script/api/ScriptJvmTypeSupport.kt:21}
 */
export class ScriptJvmTypeSupport extends Object {
    static INSTANCE: ScriptJvmTypeSupport;
    /**
     * The prefix used for JVM type imports in scripts
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/script/api/ScriptJvmTypeSupport.kt#L26 | src/main/kotlin/net/ccbluex/liquidbounce/script/api/ScriptJvmTypeSupport.kt:26}
     */
    static JVM_TYPES_PREFIX: string;
    JVM_TYPES_PREFIX: string;
}