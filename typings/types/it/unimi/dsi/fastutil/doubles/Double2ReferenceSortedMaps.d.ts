import type { Double2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceMap$Entry.d.ts'
import type { DoubleComparator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ReferenceSortedMaps extends Object {
    static EMPTY_MAP: Double2ReferenceSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Double2ReferenceSortedMap<Object>;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Double2ReferenceSortedMap<Object>): Double2ReferenceMap$Entry<Object>[];
    static fastIterator(paramarg0: Double2ReferenceSortedMap<Object>): ObjectBidirectionalIterator<Double2ReferenceMap$Entry<Object>>;
    static singleton(paramarg0: number, paramarg1: Object | null): Double2ReferenceSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => number): Double2ReferenceSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Double2ReferenceSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => number): Double2ReferenceSortedMap<Object>;
    static synchronize(paramarg0: Double2ReferenceSortedMap<Object>): Double2ReferenceSortedMap<Object>;
    static synchronize(paramarg0: Double2ReferenceSortedMap<Object>, paramarg1: Object): Double2ReferenceSortedMap<Object>;
    static unmodifiable(paramarg0: Double2ReferenceSortedMap<Object>): Double2ReferenceSortedMap<Object>;
    private constructor()
}