import type { Double2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ByteMap$Entry.d.ts'
import type { DoubleComparator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ByteSortedMaps extends Object {
    static EMPTY_MAP: Double2ByteSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Double2ByteSortedMap): Double2ByteMap$Entry[];
    static fastIterator(paramarg0: Double2ByteSortedMap): ObjectBidirectionalIterator<Double2ByteMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Double2ByteSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Double2ByteSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Double2ByteSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Double2ByteSortedMap;
    static synchronize(paramarg0: Double2ByteSortedMap): Double2ByteSortedMap;
    static synchronize(paramarg0: Double2ByteSortedMap, paramarg1: Object): Double2ByteSortedMap;
    static unmodifiable(paramarg0: Double2ByteSortedMap): Double2ByteSortedMap;
    private constructor()
}