import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../kotlin/Pair.d.ts'
import type { FontGlyph } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontGlyph.d.ts'
import type { FontId } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontId.d.ts'
import type { GlyphPage } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphPage.d.ts'
import type { GlyphPage$Companion } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphPage$Companion.d.ts'
import type { GlyphRenderInfo } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphRenderInfo.d.ts'
import type { StaticGlyphPage$Companion } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/StaticGlyphPage$Companion.d.ts'
import type { DynamicTexture } from '../../../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
/**
 * A statically allocated glyph page.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/StaticGlyphPage.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/StaticGlyphPage.kt:35}
 */
export class StaticGlyphPage extends GlyphPage {
    static Companion: GlyphPage$Companion;
    static Companion: StaticGlyphPage$Companion;
    /**
     * Creates a bitmap which contains all {@link chars}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/StaticGlyphPage.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/StaticGlyphPage.kt:60}
     */
    static createGlyphPageWithFittingCharacters(chars: FontGlyph[]): Pair<StaticGlyphPage, Object>;
    static createGlyphPages(chars: FontGlyph[]): StaticGlyphPage[];
    constructor(texture: DynamicTexture, glyphs: Pair<FontId, GlyphRenderInfo>[])
    readonly glyphs: Pair<FontId, GlyphRenderInfo>[];
    readonly texture: DynamicTexture;
}