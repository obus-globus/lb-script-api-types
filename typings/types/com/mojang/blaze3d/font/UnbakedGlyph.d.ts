import type { GlyphInfo } from '../../../../com/mojang/blaze3d/font/GlyphInfo.d.ts'
import type { UnbakedGlyph$Stitcher } from '../../../../com/mojang/blaze3d/font/UnbakedGlyph$Stitcher.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BakedGlyph } from '../../../../net/minecraft/client/gui/font/glyphs/BakedGlyph.d.ts'
export interface UnbakedGlyph extends Object{
    bake(stitcher: UnbakedGlyph$Stitcher): BakedGlyph;
    info(): GlyphInfo;
}