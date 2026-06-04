import type { GlyphProvider } from '../../../../../com/mojang/blaze3d/font/GlyphProvider.d.ts'
import type { UnbakedGlyph } from '../../../../../com/mojang/blaze3d/font/UnbakedGlyph.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AllMissingGlyphProvider extends Object implements GlyphProvider {
    static BASELINE: number;
    constructor()
    close(): void;
    getGlyph(codepoint: number): UnbakedGlyph;
    getSupportedGlyphs(): (Object | null)[];
}