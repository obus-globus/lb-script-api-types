import type { Long2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectMap$Entry.d.ts'
import type { LongComparator } from '../../../../../it/unimi/dsi/fastutil/longs/LongComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ObjectSortedMaps extends Object {
    static EMPTY_MAP: Long2ObjectSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Long2ObjectSortedMap<Object>;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Long2ObjectSortedMap<Object>): Long2ObjectMap$Entry<Object>[];
    static fastIterator(paramarg0: Long2ObjectSortedMap<Object>): ObjectBidirectionalIterator<Long2ObjectMap$Entry<Object>>;
    static singleton(paramarg0: number, paramarg1: Object | null): Long2ObjectSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => number): Long2ObjectSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Long2ObjectSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => number): Long2ObjectSortedMap<Object>;
    static synchronize(paramarg0: Long2ObjectSortedMap<Object>): Long2ObjectSortedMap<Object>;
    static synchronize(paramarg0: Long2ObjectSortedMap<Object>, paramarg1: Object): Long2ObjectSortedMap<Object>;
    static unmodifiable(paramarg0: Long2ObjectSortedMap<Object>): Long2ObjectSortedMap<Object>;
    private constructor()
}