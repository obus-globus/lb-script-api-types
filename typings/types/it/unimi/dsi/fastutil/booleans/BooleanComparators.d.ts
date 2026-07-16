import type { BooleanComparator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanComparator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanComparators extends Object {
    static NATURAL_COMPARATOR: (param0: boolean, param1: boolean) => number;
    static OPPOSITE_COMPARATOR: (param0: boolean, param1: boolean) => number;
    static asBooleanComparator(paramarg0: (param0: Object, param1: Object) => number): (param0: boolean, param1: boolean) => number;
    static oppositeComparator(paramarg0: (param0: boolean, param1: boolean) => number): (param0: boolean, param1: boolean) => number;
    private constructor()
}