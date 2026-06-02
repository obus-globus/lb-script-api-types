import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2DoubleSortedMaps extends Object {
    static EMPTY_MAP: Reference2DoubleSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Reference2DoubleSortedMap<Object>;
    static entryComparator(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Reference2DoubleSortedMap<Object>): (Object | null)[];
    static fastIterator(paramarg0: Reference2DoubleSortedMap<Object>): ObjectBidirectionalIterator<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2DoubleSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object | null) => kotlin.Boolean): Reference2DoubleSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2DoubleSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object | null) => kotlin.Boolean): Reference2DoubleSortedMap<Object>;
    static synchronize(paramarg0: Reference2DoubleSortedMap<Object>): Reference2DoubleSortedMap<Object>;
    static synchronize(paramarg0: Reference2DoubleSortedMap<Object>, paramarg1: Object): Reference2DoubleSortedMap<Object>;
    static unmodifiable(paramarg0: Reference2DoubleSortedMap<Object>): Reference2DoubleSortedMap<Object>;
    private constructor()
}