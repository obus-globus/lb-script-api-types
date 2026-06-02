import type { Long2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatMap$Entry.d.ts'
import type { LongComparator } from '../../../../../it/unimi/dsi/fastutil/longs/LongComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2FloatSortedMaps extends Object {
    static EMPTY_MAP: Long2FloatSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Long2FloatSortedMap): Long2FloatMap$Entry[];
    static fastIterator(paramarg0: Long2FloatSortedMap): ObjectBidirectionalIterator<Long2FloatMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Long2FloatSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Long2FloatSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Long2FloatSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Long2FloatSortedMap;
    static synchronize(paramarg0: Long2FloatSortedMap): Long2FloatSortedMap;
    static synchronize(paramarg0: Long2FloatSortedMap, paramarg1: Object): Long2FloatSortedMap;
    static unmodifiable(paramarg0: Long2FloatSortedMap): Long2FloatSortedMap;
    private constructor()
}