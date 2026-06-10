import type { Int2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortMap$Entry.d.ts'
import type { IntComparator } from '../../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ShortSortedMaps extends Object {
    static EMPTY_MAP: Int2ShortSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Int2ShortSortedMap): Int2ShortMap$Entry[];
    static fastIterator(paramarg0: Int2ShortSortedMap): ObjectBidirectionalIterator<Int2ShortMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Int2ShortSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Int2ShortSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Int2ShortSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Int2ShortSortedMap;
    static synchronize(paramarg0: Int2ShortSortedMap): Int2ShortSortedMap;
    static synchronize(paramarg0: Int2ShortSortedMap, paramarg1: Object): Int2ShortSortedMap;
    static unmodifiable(paramarg0: Int2ShortSortedMap): Int2ShortSortedMap;
    private constructor()
}