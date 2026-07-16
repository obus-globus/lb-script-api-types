import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ObjectComparators extends Object {
    static NATURAL_COMPARATOR: (param0: Object | null, param1: Object | null) => number;
    static OPPOSITE_COMPARATOR: (param0: Object | null, param1: Object | null) => number;
    static asObjectComparator<K extends unknown>(paramarg0: (param0: K, param1: K) => number): (param0: K, param1: K) => number;
    static oppositeComparator<K extends unknown>(paramarg0: (param0: K, param1: K) => number): (param0: K, param1: K) => number;
    private constructor()
}