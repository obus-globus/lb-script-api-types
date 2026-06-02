import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GlyphSource } from '../../../../../net/minecraft/client/gui/GlyphSource.d.ts'
import type { BakedGlyph } from '../../../../../net/minecraft/client/gui/font/glyphs/BakedGlyph.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
export class FontSet$Source extends Object implements GlyphSource {
    constructor(null_: FontSet$Source, filterFishyGlyphs: boolean)
    // private filterFishyGlyphs: boolean;
    getGlyph(codepoint: number): BakedGlyph;
    getRandomGlyph(random: RandomSource, width: number): BakedGlyph;
}