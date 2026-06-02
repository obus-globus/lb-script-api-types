import type { GlyphInfo } from '../../../../../../com/mojang/blaze3d/font/GlyphInfo.d.ts'
import type { UnbakedGlyph } from '../../../../../../com/mojang/blaze3d/font/UnbakedGlyph.d.ts'
import type { UnbakedGlyph$Stitcher } from '../../../../../../com/mojang/blaze3d/font/UnbakedGlyph$Stitcher.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BakedGlyph } from '../../../../../../net/minecraft/client/gui/font/glyphs/BakedGlyph.d.ts'
export class EmptyGlyph extends Object implements UnbakedGlyph {
    constructor(advance: number)
    // private info: GlyphInfo;
    bake(stitcher: UnbakedGlyph$Stitcher): BakedGlyph;
    info(): GlyphInfo;
}