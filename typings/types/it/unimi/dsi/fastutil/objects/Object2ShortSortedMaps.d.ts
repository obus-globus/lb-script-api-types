import type { Object2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortMap$Entry.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ShortSortedMaps extends Object {
    static EMPTY_MAP: Object2ShortSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Object2ShortSortedMap<Object>;
    static entryComparator(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static fastIterable(paramarg0: Object2ShortSortedMap<Object>): Object2ShortMap$Entry<Object>[];
    static fastIterator(paramarg0: Object2ShortSortedMap<Object>): ObjectBidirectionalIterator<Object2ShortMap$Entry<Object>>;
    static singleton(paramarg0: Object | null, paramarg1: number): Object2ShortSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object) => boolean): Object2ShortSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Object2ShortSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object) => boolean): Object2ShortSortedMap<Object>;
    static synchronize(paramarg0: Object2ShortSortedMap<Object>): Object2ShortSortedMap<Object>;
    static synchronize(paramarg0: Object2ShortSortedMap<Object>, paramarg1: Object): Object2ShortSortedMap<Object>;
    static unmodifiable(paramarg0: Object2ShortSortedMap<Object>): Object2ShortSortedMap<Object>;
    private constructor()
}