import type { Double2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanMap$Entry.d.ts'
import type { DoubleComparator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2BooleanSortedMaps extends Object {
    static EMPTY_MAP: Double2BooleanSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Double2BooleanSortedMap): Double2BooleanMap$Entry[];
    static fastIterator(paramarg0: Double2BooleanSortedMap): ObjectBidirectionalIterator<Double2BooleanMap$Entry>;
    static singleton(paramarg0: number, paramarg1: boolean): Double2BooleanSortedMap;
    static singleton(paramarg0: number, paramarg1: boolean, paramarg2: (param0: number, param1: number) => kotlin.Int): Double2BooleanSortedMap;
    static singleton(paramarg0: number, paramarg1: boolean): Double2BooleanSortedMap;
    static singleton(paramarg0: number, paramarg1: boolean, paramarg2: (param0: number, param1: number) => kotlin.Int): Double2BooleanSortedMap;
    static synchronize(paramarg0: Double2BooleanSortedMap): Double2BooleanSortedMap;
    static synchronize(paramarg0: Double2BooleanSortedMap, paramarg1: Object): Double2BooleanSortedMap;
    static unmodifiable(paramarg0: Double2BooleanSortedMap): Double2BooleanSortedMap;
    private constructor()
}