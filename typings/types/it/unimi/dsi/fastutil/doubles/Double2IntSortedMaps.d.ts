import type { Double2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntMap$Entry.d.ts'
import type { DoubleComparator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2IntSortedMaps extends Object {
    static EMPTY_MAP: Double2IntSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Double2IntSortedMap): Double2IntMap$Entry[];
    static fastIterator(paramarg0: Double2IntSortedMap): ObjectBidirectionalIterator<Double2IntMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Double2IntSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Double2IntSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Double2IntSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Double2IntSortedMap;
    static synchronize(paramarg0: Double2IntSortedMap): Double2IntSortedMap;
    static synchronize(paramarg0: Double2IntSortedMap, paramarg1: Object): Double2IntSortedMap;
    static unmodifiable(paramarg0: Double2IntSortedMap): Double2IntSortedMap;
    private constructor()
}