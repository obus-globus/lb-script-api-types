import type { Double2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongMap$Entry.d.ts'
import type { DoubleComparator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2LongSortedMaps extends Object {
    static EMPTY_MAP: Double2LongSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Double2LongSortedMap): Double2LongMap$Entry[];
    static fastIterator(paramarg0: Double2LongSortedMap): ObjectBidirectionalIterator<Double2LongMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Double2LongSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Double2LongSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Double2LongSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Double2LongSortedMap;
    static synchronize(paramarg0: Double2LongSortedMap): Double2LongSortedMap;
    static synchronize(paramarg0: Double2LongSortedMap, paramarg1: Object): Double2LongSortedMap;
    static unmodifiable(paramarg0: Double2LongSortedMap): Double2LongSortedMap;
    private constructor()
}