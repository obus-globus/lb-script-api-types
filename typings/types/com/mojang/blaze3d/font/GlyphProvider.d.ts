import type { UnbakedGlyph } from '../../../../com/mojang/blaze3d/font/UnbakedGlyph.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface GlyphProvider extends AutoCloseable, Object{
    close(): void;
    getGlyph(codepoint: number): UnbakedGlyph;
    getSupportedGlyphs(): (Object | null)[];
}