import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2FloatSortedMaps extends Object {
    static EMPTY_MAP: Object2FloatSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Object2FloatSortedMap<Object>;
    static entryComparator(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Object2FloatSortedMap<Object>): (Object | null)[];
    static fastIterator(paramarg0: Object2FloatSortedMap<Object>): ObjectBidirectionalIterator<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Object2FloatSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object | null) => kotlin.Boolean): Object2FloatSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Object2FloatSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object | null) => kotlin.Boolean): Object2FloatSortedMap<Object>;
    static synchronize(paramarg0: Object2FloatSortedMap<Object>): Object2FloatSortedMap<Object>;
    static synchronize(paramarg0: Object2FloatSortedMap<Object>, paramarg1: Object): Object2FloatSortedMap<Object>;
    static unmodifiable(paramarg0: Object2FloatSortedMap<Object>): Object2FloatSortedMap<Object>;
    private constructor()
}