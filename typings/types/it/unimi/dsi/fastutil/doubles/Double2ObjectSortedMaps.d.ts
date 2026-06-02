import type { DoubleComparator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ObjectSortedMaps extends Object {
    static EMPTY_MAP: Double2ObjectSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Double2ObjectSortedMap<Object>;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Double2ObjectSortedMap<Object>): (Object | null)[];
    static fastIterator(paramarg0: Double2ObjectSortedMap<Object>): ObjectBidirectionalIterator<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Double2ObjectSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => kotlin.Int): Double2ObjectSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Double2ObjectSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => kotlin.Int): Double2ObjectSortedMap<Object>;
    static synchronize(paramarg0: Double2ObjectSortedMap<Object>): Double2ObjectSortedMap<Object>;
    static synchronize(paramarg0: Double2ObjectSortedMap<Object>, paramarg1: Object): Double2ObjectSortedMap<Object>;
    static unmodifiable(paramarg0: Double2ObjectSortedMap<Object>): Double2ObjectSortedMap<Object>;
    private constructor()
}