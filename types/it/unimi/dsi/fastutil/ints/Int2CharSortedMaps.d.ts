import type { Int2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharMap$Entry.d.ts'
import type { IntComparator } from '../../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2CharSortedMaps extends Object {
    static EMPTY_MAP: Int2CharSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Int2CharSortedMap): Int2CharMap$Entry[];
    static fastIterator(paramarg0: Int2CharSortedMap): ObjectBidirectionalIterator<Int2CharMap$Entry>;
    static singleton(paramarg0: number, paramarg1: string): Int2CharSortedMap;
    static singleton(paramarg0: number, paramarg1: string, paramarg2: (param0: number, param1: number) => kotlin.Int): Int2CharSortedMap;
    static singleton(paramarg0: number, paramarg1: string): Int2CharSortedMap;
    static singleton(paramarg0: number, paramarg1: string, paramarg2: (param0: number, param1: number) => kotlin.Int): Int2CharSortedMap;
    static synchronize(paramarg0: Int2CharSortedMap): Int2CharSortedMap;
    static synchronize(paramarg0: Int2CharSortedMap, paramarg1: Object): Int2CharSortedMap;
    static unmodifiable(paramarg0: Int2CharSortedMap): Int2CharSortedMap;
    private constructor()
}