import type { Dimension } from '../../../../../../java/awt/Dimension.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GlyphPage$Companion$CharacterGenerationInfo } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphPage$Companion$CharacterGenerationInfo.d.ts'
export class StaticGlyphPage$GlyphPlacementResult extends Object {
    constructor(glyphsToRender: GlyphPage$Companion$CharacterGenerationInfo[], atlasDimension: Dimension)
    readonly atlasDimension: Dimension;
    readonly glyphsToRender: GlyphPage$Companion$CharacterGenerationInfo[];
}