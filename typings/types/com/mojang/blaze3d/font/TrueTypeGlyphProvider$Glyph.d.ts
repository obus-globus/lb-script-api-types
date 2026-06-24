import type { GlyphInfo } from '../../../../com/mojang/blaze3d/font/GlyphInfo.d.ts'
import type { TrueTypeGlyphProvider } from '../../../../com/mojang/blaze3d/font/TrueTypeGlyphProvider.d.ts'
import type { UnbakedGlyph } from '../../../../com/mojang/blaze3d/font/UnbakedGlyph.d.ts'
import type { UnbakedGlyph$Stitcher } from '../../../../com/mojang/blaze3d/font/UnbakedGlyph$Stitcher.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BakedGlyph } from '../../../../net/minecraft/client/gui/font/glyphs/BakedGlyph.d.ts'
export class TrueTypeGlyphProvider$Glyph extends Object implements UnbakedGlyph {
    private constructor(null_: TrueTypeGlyphProvider, left: number, top: number, width: number, height: number, advance: number, index: number)
    // private bearingX: number;
    // private bearingY: number;
    // private height: number;
    // private index: number;
    // private info: GlyphInfo;
    // private width: number;
    bake(stitcher: UnbakedGlyph$Stitcher): BakedGlyph;
    info(): GlyphInfo;
}