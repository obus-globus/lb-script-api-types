import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2CharSortedMaps extends Object {
    static EMPTY_MAP: Object2CharSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Object2CharSortedMap<Object>;
    static entryComparator(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Object2CharSortedMap<Object>): (Object | null)[];
    static fastIterator(paramarg0: Object2CharSortedMap<Object>): ObjectBidirectionalIterator<Object>;
    static singleton(paramarg0: Object | null, paramarg1: string): Object2CharSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: string, paramarg2: (param0: Object | null) => kotlin.Boolean): Object2CharSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: string): Object2CharSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: string, paramarg2: (param0: Object | null) => kotlin.Boolean): Object2CharSortedMap<Object>;
    static synchronize(paramarg0: Object2CharSortedMap<Object>): Object2CharSortedMap<Object>;
    static synchronize(paramarg0: Object2CharSortedMap<Object>, paramarg1: Object): Object2CharSortedMap<Object>;
    static unmodifiable(paramarg0: Object2CharSortedMap<Object>): Object2CharSortedMap<Object>;
    private constructor()
}