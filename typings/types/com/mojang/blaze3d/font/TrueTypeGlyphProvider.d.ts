import type { GlyphProvider } from '../../../../com/mojang/blaze3d/font/GlyphProvider.d.ts'
import type { TrueTypeGlyphProvider$GlyphEntry } from '../../../../com/mojang/blaze3d/font/TrueTypeGlyphProvider$GlyphEntry.d.ts'
import type { UnbakedGlyph } from '../../../../com/mojang/blaze3d/font/UnbakedGlyph.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CodepointMap } from '../../../../net/minecraft/client/gui/font/CodepointMap.d.ts'
import type { FT_Face } from '../../../../org/lwjgl/util/freetype/FT_Face.d.ts'
export class TrueTypeGlyphProvider extends Object implements GlyphProvider {
    static BASELINE: number;
    constructor(fontMemory: ByteBuffer, face: FT_Face, size: number, oversample: number, shiftX: number, shiftY: number, skip: string)
    // private face: FT_Face;
    // private fontMemory: ByteBuffer;
    // private glyphs: CodepointMap<TrueTypeGlyphProvider$GlyphEntry>;
    // private oversample: number;
    close(): void;
    getGlyph(codepoint: number): UnbakedGlyph;
    // private getOrLoadGlyphInfo(codepoint: number, entry: TrueTypeGlyphProvider$GlyphEntry): UnbakedGlyph;
    getSupportedGlyphs(): (Object | null)[];
    // private loadGlyph(codepoint: number, face: FT_Face, index: number): UnbakedGlyph;
    // private validateFontOpen(): FT_Face;
}