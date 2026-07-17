import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { GlyphProvider } from '../../../../com/mojang/blaze3d/font/GlyphProvider.d.ts'
import type { UnbakedGlyph } from '../../../../com/mojang/blaze3d/font/UnbakedGlyph.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SpaceProvider extends Object implements GlyphProvider {
    static BASELINE: number;
    constructor(advances: JavaMap<number, number>)
    // private glyphs: JavaMap<any, any>;
    close(): void;
    getGlyph(codepoint: number): UnbakedGlyph;
    getSupportedGlyphs(): (Object | null)[];
}