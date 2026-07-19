import type { Dimension } from '../../../../../../java/awt/Dimension.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../kotlin/Pair.d.ts'
import type { FontGlyph } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontGlyph.d.ts'
import type { GlyphPage$Companion$CharacterGenerationInfo } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphPage$Companion$CharacterGenerationInfo.d.ts'
import type { PreparedStaticGlyphPage } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/PreparedStaticGlyphPage.d.ts'
import type { StaticGlyphPage } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/StaticGlyphPage.d.ts'
import type { StaticGlyphPage$GlyphPlacementResult } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/StaticGlyphPage$GlyphPlacementResult.d.ts'
export class StaticGlyphPage$Companion extends Object {
    createGlyphPageWithFittingCharacters(chars: FontGlyph[]): Pair<StaticGlyphPage, FontGlyph[]>;
    createGlyphPages(chars: FontGlyph[]): StaticGlyphPage[];
    // private placeCharacters(glyphs: GlyphPage$Companion$CharacterGenerationInfo[], atlasWidth: number): Dimension;
    // private prepareGlyphPage(placementPlan: StaticGlyphPage$GlyphPlacementResult): PreparedStaticGlyphPage;
    // private prepareGlyphPageWithFittingCharacters(chars: FontGlyph[]): Pair<PreparedStaticGlyphPage, FontGlyph[]>;
    prepareGlyphPages(chars: FontGlyph[]): PreparedStaticGlyphPage[];
    // private tryCharacterPlacement(chars: FontGlyph[]): StaticGlyphPage$GlyphPlacementResult | null;
    // private tryCharacterPlacementWithShrinking(chars: FontGlyph[]): Pair<StaticGlyphPage$GlyphPlacementResult, FontGlyph[]> | null;
}