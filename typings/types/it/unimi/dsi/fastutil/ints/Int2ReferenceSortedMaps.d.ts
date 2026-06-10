import type { Int2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceMap$Entry.d.ts'
import type { IntComparator } from '../../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ReferenceSortedMaps extends Object {
    static EMPTY_MAP: Int2ReferenceSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Int2ReferenceSortedMap<Object>;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Int2ReferenceSortedMap<Object>): Int2ReferenceMap$Entry<Object>[];
    static fastIterator(paramarg0: Int2ReferenceSortedMap<Object>): ObjectBidirectionalIterator<Int2ReferenceMap$Entry<Object>>;
    static singleton(paramarg0: number, paramarg1: Object | null): Int2ReferenceSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => number): Int2ReferenceSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Int2ReferenceSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => number): Int2ReferenceSortedMap<Object>;
    static synchronize(paramarg0: Int2ReferenceSortedMap<Object>): Int2ReferenceSortedMap<Object>;
    static synchronize(paramarg0: Int2ReferenceSortedMap<Object>, paramarg1: Object): Int2ReferenceSortedMap<Object>;
    static unmodifiable(paramarg0: Int2ReferenceSortedMap<Object>): Int2ReferenceSortedMap<Object>;
    private constructor()
}