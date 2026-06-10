import type { Byte2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortMap$Entry.d.ts'
import type { ByteComparator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ShortSortedMaps extends Object {
    static EMPTY_MAP: Byte2ShortSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Byte2ShortSortedMap): Byte2ShortMap$Entry[];
    static fastIterator(paramarg0: Byte2ShortSortedMap): ObjectBidirectionalIterator<Byte2ShortMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Byte2ShortSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Byte2ShortSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Byte2ShortSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Byte2ShortSortedMap;
    static synchronize(paramarg0: Byte2ShortSortedMap): Byte2ShortSortedMap;
    static synchronize(paramarg0: Byte2ShortSortedMap, paramarg1: Object): Byte2ShortSortedMap;
    static unmodifiable(paramarg0: Byte2ShortSortedMap): Byte2ShortSortedMap;
    private constructor()
}