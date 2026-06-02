import type { Double2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2DoubleMap$Entry.d.ts'
import type { DoubleComparator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2DoubleSortedMaps extends Object {
    static EMPTY_MAP: Double2DoubleSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Double2DoubleSortedMap): Double2DoubleMap$Entry[];
    static fastIterator(paramarg0: Double2DoubleSortedMap): ObjectBidirectionalIterator<Double2DoubleMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Double2DoubleSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Double2DoubleSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Double2DoubleSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Double2DoubleSortedMap;
    static synchronize(paramarg0: Double2DoubleSortedMap): Double2DoubleSortedMap;
    static synchronize(paramarg0: Double2DoubleSortedMap, paramarg1: Object): Double2DoubleSortedMap;
    static unmodifiable(paramarg0: Double2DoubleSortedMap): Double2DoubleSortedMap;
    private constructor()
}