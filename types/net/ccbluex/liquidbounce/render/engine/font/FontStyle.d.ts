import type { Annotation } from '../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
/**
 * Marks an integer as a valid font style mask.
 *
 * Valid values are {@link Font.PLAIN}, {@link Font.BOLD}, {@link Font.ITALIC}, and
 * `Font.BOLD | Font.ITALIC`.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/FontStyle.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/FontStyle.kt:25}
 */
export interface FontStyle extends Annotation, Object{
    constructor()
}