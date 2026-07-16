import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharComparators extends Object {
    static NATURAL_COMPARATOR: (param0: string, param1: string) => number;
    static OPPOSITE_COMPARATOR: (param0: string, param1: string) => number;
    static asCharComparator(paramarg0: (param0: Object, param1: Object) => number): (param0: string, param1: string) => number;
    static oppositeComparator(paramarg0: (param0: string, param1: string) => number): (param0: string, param1: string) => number;
    private constructor()
}