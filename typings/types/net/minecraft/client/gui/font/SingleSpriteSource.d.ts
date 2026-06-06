import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GlyphSource } from '../../../../../net/minecraft/client/gui/GlyphSource.d.ts'
import type { BakedGlyph } from '../../../../../net/minecraft/client/gui/font/glyphs/BakedGlyph.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
export class SingleSpriteSource extends Record implements GlyphSource {
    constructor(glyph: BakedGlyph)
    equals(o: Object | null): boolean;
    getGlyph(codepoint: number): BakedGlyph;
    getRandomGlyph(random: RandomSource, width: number): BakedGlyph;
    glyph(): BakedGlyph;
    hashCode(): number;
    toString(): string;
}