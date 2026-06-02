import type { Int2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatMap$Entry.d.ts'
import type { IntComparator } from '../../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2FloatSortedMaps extends Object {
    static EMPTY_MAP: Int2FloatSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Int2FloatSortedMap): Int2FloatMap$Entry[];
    static fastIterator(paramarg0: Int2FloatSortedMap): ObjectBidirectionalIterator<Int2FloatMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Int2FloatSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Int2FloatSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Int2FloatSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Int2FloatSortedMap;
    static synchronize(paramarg0: Int2FloatSortedMap): Int2FloatSortedMap;
    static synchronize(paramarg0: Int2FloatSortedMap, paramarg1: Object): Int2FloatSortedMap;
    static unmodifiable(paramarg0: Int2FloatSortedMap): Int2FloatSortedMap;
    private constructor()
}