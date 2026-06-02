import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BakedGlyph } from '../../../../../net/minecraft/client/gui/font/glyphs/BakedGlyph.d.ts'
export class FontSet$SelectedGlyphs extends Record {
    constructor(any: () => BakedGlyph, nonFishy: () => BakedGlyph)
    // private any: () => BakedGlyph;
    // private nonFishy: () => BakedGlyph;
    any(): () => BakedGlyph;
    equals(o: Object | null): boolean;
    hashCode(): number;
    nonFishy(): () => BakedGlyph;
    // private select(filterFishy: boolean): () => BakedGlyph;
    toString(): string;
}