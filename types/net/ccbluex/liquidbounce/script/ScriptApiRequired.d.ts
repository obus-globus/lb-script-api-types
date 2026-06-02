import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
/**
 * Marks a class, function or property as part of the LiquidBounce Script API.
 * It might not serve a purpose other than documentation.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptApiRequired.kt#L21 | src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptApiRequired.kt:21}
 */
export interface ScriptApiRequired extends Annotation, Object{
    constructor()
}