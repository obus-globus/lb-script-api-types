import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2CharSortedMaps extends Object {
    static EMPTY_MAP: Reference2CharSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Reference2CharSortedMap<Object>;
    static entryComparator(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Reference2CharSortedMap<Object>): (Object | null)[];
    static fastIterator(paramarg0: Reference2CharSortedMap<Object>): ObjectBidirectionalIterator<Object>;
    static singleton(paramarg0: Object | null, paramarg1: string): Reference2CharSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: string, paramarg2: (param0: Object | null) => kotlin.Boolean): Reference2CharSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: string): Reference2CharSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: string, paramarg2: (param0: Object | null) => kotlin.Boolean): Reference2CharSortedMap<Object>;
    static synchronize(paramarg0: Reference2CharSortedMap<Object>): Reference2CharSortedMap<Object>;
    static synchronize(paramarg0: Reference2CharSortedMap<Object>, paramarg1: Object): Reference2CharSortedMap<Object>;
    static unmodifiable(paramarg0: Reference2CharSortedMap<Object>): Reference2CharSortedMap<Object>;
    private constructor()
}