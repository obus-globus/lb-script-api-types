import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ShortSortedMaps extends Object {
    static EMPTY_MAP: Reference2ShortSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Reference2ShortSortedMap<Object>;
    static entryComparator(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Reference2ShortSortedMap<Object>): (Object | null)[];
    static fastIterator(paramarg0: Reference2ShortSortedMap<Object>): ObjectBidirectionalIterator<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2ShortSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object | null) => kotlin.Boolean): Reference2ShortSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2ShortSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object | null) => kotlin.Boolean): Reference2ShortSortedMap<Object>;
    static synchronize(paramarg0: Reference2ShortSortedMap<Object>): Reference2ShortSortedMap<Object>;
    static synchronize(paramarg0: Reference2ShortSortedMap<Object>, paramarg1: Object): Reference2ShortSortedMap<Object>;
    static unmodifiable(paramarg0: Reference2ShortSortedMap<Object>): Reference2ShortSortedMap<Object>;
    private constructor()
}