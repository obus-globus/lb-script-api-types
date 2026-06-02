import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2LongSortedMaps extends Object {
    static EMPTY_MAP: Reference2LongSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Reference2LongSortedMap<Object>;
    static entryComparator(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Reference2LongSortedMap<Object>): (Object | null)[];
    static fastIterator(paramarg0: Reference2LongSortedMap<Object>): ObjectBidirectionalIterator<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2LongSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object | null) => kotlin.Boolean): Reference2LongSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2LongSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object | null) => kotlin.Boolean): Reference2LongSortedMap<Object>;
    static synchronize(paramarg0: Reference2LongSortedMap<Object>): Reference2LongSortedMap<Object>;
    static synchronize(paramarg0: Reference2LongSortedMap<Object>, paramarg1: Object): Reference2LongSortedMap<Object>;
    static unmodifiable(paramarg0: Reference2LongSortedMap<Object>): Reference2LongSortedMap<Object>;
    private constructor()
}