import type { GlyphProvider } from '../../../../../../com/mojang/blaze3d/font/GlyphProvider.d.ts'
import type { UnbakedGlyph } from '../../../../../../com/mojang/blaze3d/font/UnbakedGlyph.d.ts'
import type { NativeImage } from '../../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CodepointMap } from '../../../../../../net/minecraft/client/gui/font/CodepointMap.d.ts'
import type { BitmapProvider$Glyph } from '../../../../../../net/minecraft/client/gui/font/providers/BitmapProvider$Glyph.d.ts'
export class BitmapProvider extends Object implements GlyphProvider {
    static BASELINE: number;
    private constructor(image: NativeImage, glyphs: CodepointMap<BitmapProvider$Glyph>)
    // private glyphs: CodepointMap<BitmapProvider$Glyph>;
    // private image: NativeImage;
    close(): void;
    getGlyph(codepoint: number): UnbakedGlyph;
    getSupportedGlyphs(): (Object | null)[];
}