import type { Long2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleMap$Entry.d.ts'
import type { LongComparator } from '../../../../../it/unimi/dsi/fastutil/longs/LongComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2DoubleSortedMaps extends Object {
    static EMPTY_MAP: Long2DoubleSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Long2DoubleSortedMap): Long2DoubleMap$Entry[];
    static fastIterator(paramarg0: Long2DoubleSortedMap): ObjectBidirectionalIterator<Long2DoubleMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Long2DoubleSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Long2DoubleSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Long2DoubleSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Long2DoubleSortedMap;
    static synchronize(paramarg0: Long2DoubleSortedMap): Long2DoubleSortedMap;
    static synchronize(paramarg0: Long2DoubleSortedMap, paramarg1: Object): Long2DoubleSortedMap;
    static unmodifiable(paramarg0: Long2DoubleSortedMap): Long2DoubleSortedMap;
    private constructor()
}