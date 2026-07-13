import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
/**
 * Marks a class, function or property as part of the LiquidBounce Script API.
 * It might not serve a purpose other than documentation.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptApiRequired.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptApiRequired.kt:25}
 */
export interface ScriptApiRequired extends Annotation, Object{
    constructor()
}