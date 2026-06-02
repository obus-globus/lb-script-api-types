import type { BooleanComparator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanComparator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanComparators extends Object {
    static NATURAL_COMPARATOR: (param0: boolean, param1: boolean) => kotlin.Int;
    static OPPOSITE_COMPARATOR: (param0: boolean, param1: boolean) => kotlin.Int;
    static asBooleanComparator(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: boolean, param1: boolean) => kotlin.Int;
    static oppositeComparator(paramarg0: (param0: boolean, param1: boolean) => kotlin.Int): (param0: boolean, param1: boolean) => kotlin.Int;
    private constructor()
}