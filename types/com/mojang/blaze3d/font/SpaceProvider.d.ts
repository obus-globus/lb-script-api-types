import type { GlyphProvider } from '../../../../com/mojang/blaze3d/font/GlyphProvider.d.ts'
import type { UnbakedGlyph } from '../../../../com/mojang/blaze3d/font/UnbakedGlyph.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EmptyGlyph } from '../../../../net/minecraft/client/gui/font/glyphs/EmptyGlyph.d.ts'
export class SpaceProvider extends Object implements GlyphProvider {
    static BASELINE: number;
    constructor(advances: { [key: number]: number })
    // private glyphs: Int2ObjectMap<EmptyGlyph>;
    close(): void;
    getGlyph(codepoint: number): UnbakedGlyph;
    getGlyph(codepoint: number): UnbakedGlyph;
    getSupportedGlyphs(): (Object | null)[];
}