import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../kotlin/Pair.d.ts'
import type { FontGlyph } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontGlyph.d.ts'
import type { FontId } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontId.d.ts'
import type { GlyphAtlasTexture } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphAtlasTexture.d.ts'
import type { GlyphPage } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphPage.d.ts'
import type { GlyphRenderInfo } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphRenderInfo.d.ts'
import type { StaticGlyphPage$Companion } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/StaticGlyphPage$Companion.d.ts'
/**
 * A statically allocated glyph page.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/StaticGlyphPage.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/StaticGlyphPage.kt:35}
 */
export class StaticGlyphPage extends GlyphPage {
    static Companion: StaticGlyphPage$Companion;
    static fontRasterizationLock: Object;
    /**
     * Creates a bitmap which contains all {@link chars}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/StaticGlyphPage.kt#L63 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/StaticGlyphPage.kt:63}
     */
    static createGlyphPageWithFittingCharacters(chars: FontGlyph[]): Pair<StaticGlyphPage, FontGlyph[]>;
    static createGlyphPages(chars: FontGlyph[]): StaticGlyphPage[];
    constructor(texture: GlyphAtlasTexture, glyphs: Pair<FontId, GlyphRenderInfo>[])
    readonly glyphs: Pair<FontId, GlyphRenderInfo>[];
    readonly texture: GlyphAtlasTexture;
}