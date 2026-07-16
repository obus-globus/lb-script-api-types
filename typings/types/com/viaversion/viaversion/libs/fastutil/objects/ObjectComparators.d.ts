import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ObjectComparators extends Object {
    static NATURAL_COMPARATOR: (param0: Object | null, param1: Object | null) => number;
    static OPPOSITE_COMPARATOR: (param0: Object | null, param1: Object | null) => number;
    static asObjectComparator(paramarg0: (param0: Object | null, param1: Object | null) => number): (param0: Object | null, param1: Object | null) => number;
    static oppositeComparator(paramarg0: (param0: Object | null, param1: Object | null) => number): (param0: Object | null, param1: Object | null) => number;
    private constructor()
}