import type { DoubleComparator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ReferenceSortedMaps extends Object {
    static EMPTY_MAP: Double2ReferenceSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Double2ReferenceSortedMap<Object>;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Double2ReferenceSortedMap<Object>): (Object | null)[];
    static fastIterator(paramarg0: Double2ReferenceSortedMap<Object>): ObjectBidirectionalIterator<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Double2ReferenceSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => kotlin.Int): Double2ReferenceSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Double2ReferenceSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => kotlin.Int): Double2ReferenceSortedMap<Object>;
    static synchronize(paramarg0: Double2ReferenceSortedMap<Object>): Double2ReferenceSortedMap<Object>;
    static synchronize(paramarg0: Double2ReferenceSortedMap<Object>, paramarg1: Object): Double2ReferenceSortedMap<Object>;
    static unmodifiable(paramarg0: Double2ReferenceSortedMap<Object>): Double2ReferenceSortedMap<Object>;
    private constructor()
}