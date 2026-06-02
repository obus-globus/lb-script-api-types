import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2IntSortedMaps extends Object {
    static EMPTY_MAP: Reference2IntSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Reference2IntSortedMap<Object>;
    static entryComparator(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Reference2IntSortedMap<Object>): (Object | null)[];
    static fastIterator(paramarg0: Reference2IntSortedMap<Object>): ObjectBidirectionalIterator<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2IntSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object | null) => kotlin.Boolean): Reference2IntSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2IntSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object | null) => kotlin.Boolean): Reference2IntSortedMap<Object>;
    static synchronize(paramarg0: Reference2IntSortedMap<Object>): Reference2IntSortedMap<Object>;
    static synchronize(paramarg0: Reference2IntSortedMap<Object>, paramarg1: Object): Reference2IntSortedMap<Object>;
    static unmodifiable(paramarg0: Reference2IntSortedMap<Object>): Reference2IntSortedMap<Object>;
    private constructor()
}