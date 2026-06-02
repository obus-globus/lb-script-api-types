import type { Byte2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteMap$Entry.d.ts'
import type { ByteComparator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ByteSortedMaps extends Object {
    static EMPTY_MAP: Byte2ByteSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Byte2ByteSortedMap): Byte2ByteMap$Entry[];
    static fastIterator(paramarg0: Byte2ByteSortedMap): ObjectBidirectionalIterator<Byte2ByteMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Byte2ByteSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Byte2ByteSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Byte2ByteSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Byte2ByteSortedMap;
    static synchronize(paramarg0: Byte2ByteSortedMap): Byte2ByteSortedMap;
    static synchronize(paramarg0: Byte2ByteSortedMap, paramarg1: Object): Byte2ByteSortedMap;
    static unmodifiable(paramarg0: Byte2ByteSortedMap): Byte2ByteSortedMap;
    private constructor()
}