import type { Double2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ShortMap$Entry.d.ts'
import type { DoubleComparator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ShortSortedMaps extends Object {
    static EMPTY_MAP: Double2ShortSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Double2ShortSortedMap): Double2ShortMap$Entry[];
    static fastIterator(paramarg0: Double2ShortSortedMap): ObjectBidirectionalIterator<Double2ShortMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Double2ShortSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Double2ShortSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Double2ShortSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Double2ShortSortedMap;
    static synchronize(paramarg0: Double2ShortSortedMap): Double2ShortSortedMap;
    static synchronize(paramarg0: Double2ShortSortedMap, paramarg1: Object): Double2ShortSortedMap;
    static unmodifiable(paramarg0: Double2ShortSortedMap): Double2ShortSortedMap;
    private constructor()
}