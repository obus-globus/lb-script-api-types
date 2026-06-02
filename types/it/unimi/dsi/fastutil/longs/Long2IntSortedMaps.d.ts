import type { Long2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntMap$Entry.d.ts'
import type { LongComparator } from '../../../../../it/unimi/dsi/fastutil/longs/LongComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2IntSortedMaps extends Object {
    static EMPTY_MAP: Long2IntSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Long2IntSortedMap): Long2IntMap$Entry[];
    static fastIterator(paramarg0: Long2IntSortedMap): ObjectBidirectionalIterator<Long2IntMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Long2IntSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Long2IntSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Long2IntSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Long2IntSortedMap;
    static synchronize(paramarg0: Long2IntSortedMap): Long2IntSortedMap;
    static synchronize(paramarg0: Long2IntSortedMap, paramarg1: Object): Long2IntSortedMap;
    static unmodifiable(paramarg0: Long2IntSortedMap): Long2IntSortedMap;
    private constructor()
}