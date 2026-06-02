import type { Int2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongMap$Entry.d.ts'
import type { IntComparator } from '../../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2LongSortedMaps extends Object {
    static EMPTY_MAP: Int2LongSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Int2LongSortedMap): Int2LongMap$Entry[];
    static fastIterator(paramarg0: Int2LongSortedMap): ObjectBidirectionalIterator<Int2LongMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Int2LongSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Int2LongSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Int2LongSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Int2LongSortedMap;
    static synchronize(paramarg0: Int2LongSortedMap): Int2LongSortedMap;
    static synchronize(paramarg0: Int2LongSortedMap, paramarg1: Object): Int2LongSortedMap;
    static unmodifiable(paramarg0: Int2LongSortedMap): Int2LongSortedMap;
    private constructor()
}