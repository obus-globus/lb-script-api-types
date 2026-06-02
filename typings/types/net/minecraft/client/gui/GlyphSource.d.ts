import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BakedGlyph } from '../../../../net/minecraft/client/gui/font/glyphs/BakedGlyph.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
export interface GlyphSource extends Object{
    getGlyph(codepoint: number): BakedGlyph;
    getRandomGlyph(random: RandomSource, width: number): BakedGlyph;
}