import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * Constants and utilities for JVM type loading in scripts
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/script/api/ScriptJvmTypeSupport.kt#L24 | src/main/kotlin/net/ccbluex/liquidbounce/script/api/ScriptJvmTypeSupport.kt:24}
 */
export class ScriptJvmTypeSupport extends Object {
    static INSTANCE: ScriptJvmTypeSupport;
    /**
     * The prefix used for JVM type imports in scripts
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/script/api/ScriptJvmTypeSupport.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/script/api/ScriptJvmTypeSupport.kt:29}
     */
    static JVM_TYPES_PREFIX: string;
    JVM_TYPES_PREFIX: string;
}