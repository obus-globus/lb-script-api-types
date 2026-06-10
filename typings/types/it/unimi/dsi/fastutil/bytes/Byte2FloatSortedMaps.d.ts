import type { Byte2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatMap$Entry.d.ts'
import type { ByteComparator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2FloatSortedMaps extends Object {
    static EMPTY_MAP: Byte2FloatSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Byte2FloatSortedMap): Byte2FloatMap$Entry[];
    static fastIterator(paramarg0: Byte2FloatSortedMap): ObjectBidirectionalIterator<Byte2FloatMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Byte2FloatSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Byte2FloatSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Byte2FloatSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Byte2FloatSortedMap;
    static synchronize(paramarg0: Byte2FloatSortedMap): Byte2FloatSortedMap;
    static synchronize(paramarg0: Byte2FloatSortedMap, paramarg1: Object): Byte2FloatSortedMap;
    static unmodifiable(paramarg0: Byte2FloatSortedMap): Byte2FloatSortedMap;
    private constructor()
}