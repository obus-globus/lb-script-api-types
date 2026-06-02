import type { Double2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatMap$Entry.d.ts'
import type { DoubleComparator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2FloatSortedMaps extends Object {
    static EMPTY_MAP: Double2FloatSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Double2FloatSortedMap): Double2FloatMap$Entry[];
    static fastIterator(paramarg0: Double2FloatSortedMap): ObjectBidirectionalIterator<Double2FloatMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Double2FloatSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Double2FloatSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Double2FloatSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Double2FloatSortedMap;
    static synchronize(paramarg0: Double2FloatSortedMap): Double2FloatSortedMap;
    static synchronize(paramarg0: Double2FloatSortedMap, paramarg1: Object): Double2FloatSortedMap;
    static unmodifiable(paramarg0: Double2FloatSortedMap): Double2FloatSortedMap;
    private constructor()
}