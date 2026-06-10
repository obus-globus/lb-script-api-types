import type { Int2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectMap$Entry.d.ts'
import type { IntComparator } from '../../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ObjectSortedMaps extends Object {
    static EMPTY_MAP: Int2ObjectSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Int2ObjectSortedMap<Object>;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Int2ObjectSortedMap<Object>): Int2ObjectMap$Entry<Object>[];
    static fastIterator(paramarg0: Int2ObjectSortedMap<Object>): ObjectBidirectionalIterator<Int2ObjectMap$Entry<Object>>;
    static singleton(paramarg0: number, paramarg1: Object | null): Int2ObjectSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => number): Int2ObjectSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Int2ObjectSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => number): Int2ObjectSortedMap<Object>;
    static synchronize(paramarg0: Int2ObjectSortedMap<Object>): Int2ObjectSortedMap<Object>;
    static synchronize(paramarg0: Int2ObjectSortedMap<Object>, paramarg1: Object): Int2ObjectSortedMap<Object>;
    static unmodifiable(paramarg0: Int2ObjectSortedMap<Object>): Int2ObjectSortedMap<Object>;
    private constructor()
}