import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharComparators extends Object {
    static NATURAL_COMPARATOR: (param0: string, param1: string) => kotlin.Int;
    static OPPOSITE_COMPARATOR: (param0: string, param1: string) => kotlin.Int;
    static asCharComparator(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: string, param1: string) => kotlin.Int;
    static oppositeComparator(paramarg0: (param0: string, param1: string) => kotlin.Int): (param0: string, param1: string) => kotlin.Int;
    private constructor()
}