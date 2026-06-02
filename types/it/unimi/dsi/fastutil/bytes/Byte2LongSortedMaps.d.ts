import type { Byte2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongMap$Entry.d.ts'
import type { ByteComparator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2LongSortedMaps extends Object {
    static EMPTY_MAP: Byte2LongSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Byte2LongSortedMap): Byte2LongMap$Entry[];
    static fastIterator(paramarg0: Byte2LongSortedMap): ObjectBidirectionalIterator<Byte2LongMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Byte2LongSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Byte2LongSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Byte2LongSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Byte2LongSortedMap;
    static synchronize(paramarg0: Byte2LongSortedMap): Byte2LongSortedMap;
    static synchronize(paramarg0: Byte2LongSortedMap, paramarg1: Object): Byte2LongSortedMap;
    static unmodifiable(paramarg0: Byte2LongSortedMap): Byte2LongSortedMap;
    private constructor()
}