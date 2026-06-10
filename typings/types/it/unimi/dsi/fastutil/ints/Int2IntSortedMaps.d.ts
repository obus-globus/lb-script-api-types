import type { Int2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntMap$Entry.d.ts'
import type { IntComparator } from '../../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2IntSortedMaps extends Object {
    static EMPTY_MAP: Int2IntSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Int2IntSortedMap): Int2IntMap$Entry[];
    static fastIterator(paramarg0: Int2IntSortedMap): ObjectBidirectionalIterator<Int2IntMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Int2IntSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Int2IntSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Int2IntSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Int2IntSortedMap;
    static synchronize(paramarg0: Int2IntSortedMap): Int2IntSortedMap;
    static synchronize(paramarg0: Int2IntSortedMap, paramarg1: Object): Int2IntSortedMap;
    static unmodifiable(paramarg0: Int2IntSortedMap): Int2IntSortedMap;
    private constructor()
}