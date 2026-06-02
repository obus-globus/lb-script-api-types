import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ShortSortedMaps extends Object {
    static EMPTY_MAP: Object2ShortSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Object2ShortSortedMap<Object>;
    static entryComparator(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Object2ShortSortedMap<Object>): (Object | null)[];
    static fastIterator(paramarg0: Object2ShortSortedMap<Object>): ObjectBidirectionalIterator<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Object2ShortSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object | null) => kotlin.Boolean): Object2ShortSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Object2ShortSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object | null) => kotlin.Boolean): Object2ShortSortedMap<Object>;
    static synchronize(paramarg0: Object2ShortSortedMap<Object>): Object2ShortSortedMap<Object>;
    static synchronize(paramarg0: Object2ShortSortedMap<Object>, paramarg1: Object): Object2ShortSortedMap<Object>;
    static unmodifiable(paramarg0: Object2ShortSortedMap<Object>): Object2ShortSortedMap<Object>;
    private constructor()
}