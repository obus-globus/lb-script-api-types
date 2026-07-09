import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
/**
 * Marks a class, function or property as part of the LiquidBounce Script API.
 * It might not serve a purpose other than documentation.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptApiRequired.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptApiRequired.kt:25}
 */
export interface ScriptApiRequired extends Annotation, Object{
    constructor()
}