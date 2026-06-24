import type { GlyphInfo } from '../../../../../../com/mojang/blaze3d/font/GlyphInfo.d.ts'
import type { UnbakedGlyph } from '../../../../../../com/mojang/blaze3d/font/UnbakedGlyph.d.ts'
import type { UnbakedGlyph$Stitcher } from '../../../../../../com/mojang/blaze3d/font/UnbakedGlyph$Stitcher.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BakedGlyph } from '../../../../../../net/minecraft/client/gui/font/glyphs/BakedGlyph.d.ts'
import type { BitmapProvider$ImageDataHolder } from '../../../../../../net/minecraft/client/gui/font/providers/BitmapProvider$ImageDataHolder.d.ts'
export class BitmapProvider$Glyph extends Record implements UnbakedGlyph {
    private constructor(scale: number, imageData: BitmapProvider$ImageDataHolder, offsetX: number, offsetY: number, width: number, height: number, advance: number, ascent: number)
    // private advance: number;
    // private ascent: number;
    // private height: number;
    // private imageData: BitmapProvider$ImageDataHolder;
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
    imageData(): BitmapProvider$ImageDataHolder;
    info(): GlyphInfo;
    offsetX(): number;
    offsetY(): number;
    scale(): number;
    toString(): string;
    width(): number;
}