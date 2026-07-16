import type { IntComparator } from '../../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntComparators extends Object {
    static NATURAL_COMPARATOR: (param0: number, param1: number) => number;
    static OPPOSITE_COMPARATOR: (param0: number, param1: number) => number;
    static asIntComparator(paramarg0: (param0: Object, param1: Object) => number): (param0: number, param1: number) => number;
    static oppositeComparator(paramarg0: (param0: number, param1: number) => number): (param0: number, param1: number) => number;
    private constructor()
}