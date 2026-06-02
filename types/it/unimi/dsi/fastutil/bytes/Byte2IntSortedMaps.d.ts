import type { Byte2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntMap$Entry.d.ts'
import type { ByteComparator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2IntSortedMaps extends Object {
    static EMPTY_MAP: Byte2IntSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Byte2IntSortedMap): Byte2IntMap$Entry[];
    static fastIterator(paramarg0: Byte2IntSortedMap): ObjectBidirectionalIterator<Byte2IntMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Byte2IntSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Byte2IntSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Byte2IntSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Byte2IntSortedMap;
    static synchronize(paramarg0: Byte2IntSortedMap): Byte2IntSortedMap;
    static synchronize(paramarg0: Byte2IntSortedMap, paramarg1: Object): Byte2IntSortedMap;
    static unmodifiable(paramarg0: Byte2IntSortedMap): Byte2IntSortedMap;
    private constructor()
}