import type { Long2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongMap$Entry.d.ts'
import type { LongComparator } from '../../../../../it/unimi/dsi/fastutil/longs/LongComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2LongSortedMaps extends Object {
    static EMPTY_MAP: Long2LongSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Long2LongSortedMap): Long2LongMap$Entry[];
    static fastIterator(paramarg0: Long2LongSortedMap): ObjectBidirectionalIterator<Long2LongMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Long2LongSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Long2LongSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Long2LongSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Long2LongSortedMap;
    static synchronize(paramarg0: Long2LongSortedMap): Long2LongSortedMap;
    static synchronize(paramarg0: Long2LongSortedMap, paramarg1: Object): Long2LongSortedMap;
    static unmodifiable(paramarg0: Long2LongSortedMap): Long2LongSortedMap;
    private constructor()
}