import type { Int2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteMap$Entry.d.ts'
import type { IntComparator } from '../../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ByteSortedMaps extends Object {
    static EMPTY_MAP: Int2ByteSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Int2ByteSortedMap): Int2ByteMap$Entry[];
    static fastIterator(paramarg0: Int2ByteSortedMap): ObjectBidirectionalIterator<Int2ByteMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Int2ByteSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Int2ByteSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Int2ByteSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Int2ByteSortedMap;
    static synchronize(paramarg0: Int2ByteSortedMap): Int2ByteSortedMap;
    static synchronize(paramarg0: Int2ByteSortedMap, paramarg1: Object): Int2ByteSortedMap;
    static unmodifiable(paramarg0: Int2ByteSortedMap): Int2ByteSortedMap;
    private constructor()
}