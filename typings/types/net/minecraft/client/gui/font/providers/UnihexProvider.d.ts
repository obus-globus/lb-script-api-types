import type { GlyphProvider } from '../../../../../../com/mojang/blaze3d/font/GlyphProvider.d.ts'
import type { UnbakedGlyph } from '../../../../../../com/mojang/blaze3d/font/UnbakedGlyph.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CodepointMap } from '../../../../../../net/minecraft/client/gui/font/CodepointMap.d.ts'
import type { UnihexProvider$Glyph } from '../../../../../../net/minecraft/client/gui/font/providers/UnihexProvider$Glyph.d.ts'
export class UnihexProvider extends Object implements GlyphProvider {
    static BASELINE: number;
    private constructor(glyphs: CodepointMap<UnihexProvider$Glyph>)
    // private glyphs: CodepointMap<UnihexProvider$Glyph>;
    close(): void;
    getGlyph(codepoint: number): UnbakedGlyph;
    getSupportedGlyphs(): (Object | null)[];
}