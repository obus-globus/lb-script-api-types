import type { DoubleComparator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleComparator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleComparators extends Object {
    static NATURAL_COMPARATOR: (param0: number, param1: number) => number;
    static OPPOSITE_COMPARATOR: (param0: number, param1: number) => number;
    static asDoubleComparator(paramarg0: (param0: Object) => boolean): (param0: number, param1: number) => number;
    static oppositeComparator(paramarg0: (param0: number, param1: number) => number): (param0: number, param1: number) => number;
    private constructor()
}