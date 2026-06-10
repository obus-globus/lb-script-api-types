import type { Object2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteMap$Entry.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ByteSortedMaps extends Object {
    static EMPTY_MAP: Object2ByteSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Object2ByteSortedMap<Object>;
    static entryComparator(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static fastIterable(paramarg0: Object2ByteSortedMap<Object>): Object2ByteMap$Entry<Object>[];
    static fastIterator(paramarg0: Object2ByteSortedMap<Object>): ObjectBidirectionalIterator<Object2ByteMap$Entry<Object>>;
    static singleton(paramarg0: Object | null, paramarg1: number): Object2ByteSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object) => boolean): Object2ByteSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Object2ByteSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object) => boolean): Object2ByteSortedMap<Object>;
    static synchronize(paramarg0: Object2ByteSortedMap<Object>): Object2ByteSortedMap<Object>;
    static synchronize(paramarg0: Object2ByteSortedMap<Object>, paramarg1: Object): Object2ByteSortedMap<Object>;
    static unmodifiable(paramarg0: Object2ByteSortedMap<Object>): Object2ByteSortedMap<Object>;
    private constructor()
}