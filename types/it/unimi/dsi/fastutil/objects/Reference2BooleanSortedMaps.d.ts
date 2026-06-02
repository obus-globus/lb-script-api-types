import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2BooleanSortedMaps extends Object {
    static EMPTY_MAP: Reference2BooleanSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Reference2BooleanSortedMap<Object>;
    static entryComparator(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Reference2BooleanSortedMap<Object>): (Object | null)[];
    static fastIterator(paramarg0: Reference2BooleanSortedMap<Object>): ObjectBidirectionalIterator<Object>;
    static singleton(paramarg0: Object | null, paramarg1: boolean): Reference2BooleanSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: boolean, paramarg2: (param0: Object | null) => kotlin.Boolean): Reference2BooleanSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: boolean): Reference2BooleanSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: boolean, paramarg2: (param0: Object | null) => kotlin.Boolean): Reference2BooleanSortedMap<Object>;
    static synchronize(paramarg0: Reference2BooleanSortedMap<Object>): Reference2BooleanSortedMap<Object>;
    static synchronize(paramarg0: Reference2BooleanSortedMap<Object>, paramarg1: Object): Reference2BooleanSortedMap<Object>;
    static unmodifiable(paramarg0: Reference2BooleanSortedMap<Object>): Reference2BooleanSortedMap<Object>;
    private constructor()
}