import type { GlyphBitmap } from '../../../../com/mojang/blaze3d/font/GlyphBitmap.d.ts'
import type { GlyphInfo } from '../../../../com/mojang/blaze3d/font/GlyphInfo.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BakedGlyph } from '../../../../net/minecraft/client/gui/font/glyphs/BakedGlyph.d.ts'
export interface UnbakedGlyph$Stitcher extends Object{
    getMissing(): BakedGlyph;
    stitch(info: GlyphInfo, glyphBitmap: GlyphBitmap): BakedGlyph;
}