import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectComparators extends Object {
    static NATURAL_COMPARATOR: (param0: Object | null) => kotlin.Boolean;
    static OPPOSITE_COMPARATOR: (param0: Object | null) => kotlin.Boolean;
    static asObjectComparator(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static oppositeComparator(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    private constructor()
}