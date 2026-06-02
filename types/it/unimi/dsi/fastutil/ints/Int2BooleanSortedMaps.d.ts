import type { Int2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanMap$Entry.d.ts'
import type { IntComparator } from '../../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2BooleanSortedMaps extends Object {
    static EMPTY_MAP: Int2BooleanSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Int2BooleanSortedMap): Int2BooleanMap$Entry[];
    static fastIterator(paramarg0: Int2BooleanSortedMap): ObjectBidirectionalIterator<Int2BooleanMap$Entry>;
    static singleton(paramarg0: number, paramarg1: boolean): Int2BooleanSortedMap;
    static singleton(paramarg0: number, paramarg1: boolean, paramarg2: (param0: number, param1: number) => kotlin.Int): Int2BooleanSortedMap;
    static singleton(paramarg0: number, paramarg1: boolean): Int2BooleanSortedMap;
    static singleton(paramarg0: number, paramarg1: boolean, paramarg2: (param0: number, param1: number) => kotlin.Int): Int2BooleanSortedMap;
    static synchronize(paramarg0: Int2BooleanSortedMap): Int2BooleanSortedMap;
    static synchronize(paramarg0: Int2BooleanSortedMap, paramarg1: Object): Int2BooleanSortedMap;
    static unmodifiable(paramarg0: Int2BooleanSortedMap): Int2BooleanSortedMap;
    private constructor()
}