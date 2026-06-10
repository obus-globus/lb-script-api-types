import type { Long2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceMap$Entry.d.ts'
import type { LongComparator } from '../../../../../it/unimi/dsi/fastutil/longs/LongComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ReferenceSortedMaps extends Object {
    static EMPTY_MAP: Long2ReferenceSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Long2ReferenceSortedMap<Object>;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Long2ReferenceSortedMap<Object>): Long2ReferenceMap$Entry<Object>[];
    static fastIterator(paramarg0: Long2ReferenceSortedMap<Object>): ObjectBidirectionalIterator<Long2ReferenceMap$Entry<Object>>;
    static singleton(paramarg0: number, paramarg1: Object | null): Long2ReferenceSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => number): Long2ReferenceSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Long2ReferenceSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => number): Long2ReferenceSortedMap<Object>;
    static synchronize(paramarg0: Long2ReferenceSortedMap<Object>): Long2ReferenceSortedMap<Object>;
    static synchronize(paramarg0: Long2ReferenceSortedMap<Object>, paramarg1: Object): Long2ReferenceSortedMap<Object>;
    static unmodifiable(paramarg0: Long2ReferenceSortedMap<Object>): Long2ReferenceSortedMap<Object>;
    private constructor()
}