import type { GlyphInfo } from '../../../../../../com/mojang/blaze3d/font/GlyphInfo.d.ts'
import type { UnbakedGlyph } from '../../../../../../com/mojang/blaze3d/font/UnbakedGlyph.d.ts'
import type { UnbakedGlyph$Stitcher } from '../../../../../../com/mojang/blaze3d/font/UnbakedGlyph$Stitcher.d.ts'
import type { NativeImage } from '../../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BakedGlyph } from '../../../../../../net/minecraft/client/gui/font/glyphs/BakedGlyph.d.ts'
export class BitmapProvider$Glyph extends Record implements UnbakedGlyph {
    // private advance: number;
    // private ascent: number;
    // private height: number;
    // private image: NativeImage;
    // private offsetX: number;
    // private offsetY: number;
    // private scale: number;
    // private width: number;
    advance(): number;
    ascent(): number;
    bake(stitcher: UnbakedGlyph$Stitcher): BakedGlyph;
    equals(o: Object | null): boolean;
    hashCode(): number;
    height(): number;
    image(): NativeImage;
    info(): GlyphInfo;
    offsetX(): number;
    offsetY(): number;
    scale(): number;
    toString(): string;
    width(): number;
}