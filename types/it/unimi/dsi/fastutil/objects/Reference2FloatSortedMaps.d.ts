import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2FloatSortedMaps extends Object {
    static EMPTY_MAP: Reference2FloatSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Reference2FloatSortedMap<Object>;
    static entryComparator(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Reference2FloatSortedMap<Object>): (Object | null)[];
    static fastIterator(paramarg0: Reference2FloatSortedMap<Object>): ObjectBidirectionalIterator<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2FloatSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object | null) => kotlin.Boolean): Reference2FloatSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2FloatSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object | null) => kotlin.Boolean): Reference2FloatSortedMap<Object>;
    static synchronize(paramarg0: Reference2FloatSortedMap<Object>): Reference2FloatSortedMap<Object>;
    static synchronize(paramarg0: Reference2FloatSortedMap<Object>, paramarg1: Object): Reference2FloatSortedMap<Object>;
    static unmodifiable(paramarg0: Reference2FloatSortedMap<Object>): Reference2FloatSortedMap<Object>;
    private constructor()
}