import type { Pair } from '../../../../../../kotlin/Pair.d.ts'
import type { FontGlyph } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontGlyph.d.ts'
import type { FontId } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontId.d.ts'
import type { GlyphPage } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphPage.d.ts'
import type { GlyphRenderInfo } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphRenderInfo.d.ts'
import type { StaticGlyphPage$Companion } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/StaticGlyphPage$Companion.d.ts'
import type { DynamicTexture } from '../../../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
/**
 * A statically allocated glyph page.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/StaticGlyphPage.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/StaticGlyphPage.kt:38}
 */
export class StaticGlyphPage extends GlyphPage {
    static Companion: StaticGlyphPage$Companion;
    /**
     * Creates a bitmap which contains all {@link chars}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/StaticGlyphPage.kt#L63 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/StaticGlyphPage.kt:63}
     */
    static createGlyphPageWithFittingCharacters(chars: FontGlyph[]): Pair<StaticGlyphPage, FontGlyph[]>;
    static createGlyphPages(chars: FontGlyph[]): StaticGlyphPage[];
    constructor(texture: DynamicTexture, glyphs: Pair<FontId, GlyphRenderInfo>[])
    readonly glyphs: Pair<FontId, GlyphRenderInfo>[];
    readonly texture: DynamicTexture;
}