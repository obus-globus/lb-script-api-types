import type { Byte2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2BooleanMap$Entry.d.ts'
import type { ByteComparator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2BooleanSortedMaps extends Object {
    static EMPTY_MAP: Byte2BooleanSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Byte2BooleanSortedMap): Byte2BooleanMap$Entry[];
    static fastIterator(paramarg0: Byte2BooleanSortedMap): ObjectBidirectionalIterator<Byte2BooleanMap$Entry>;
    static singleton(paramarg0: number, paramarg1: boolean): Byte2BooleanSortedMap;
    static singleton(paramarg0: number, paramarg1: boolean, paramarg2: (param0: number, param1: number) => kotlin.Int): Byte2BooleanSortedMap;
    static singleton(paramarg0: number, paramarg1: boolean): Byte2BooleanSortedMap;
    static singleton(paramarg0: number, paramarg1: boolean, paramarg2: (param0: number, param1: number) => kotlin.Int): Byte2BooleanSortedMap;
    static synchronize(paramarg0: Byte2BooleanSortedMap): Byte2BooleanSortedMap;
    static synchronize(paramarg0: Byte2BooleanSortedMap, paramarg1: Object): Byte2BooleanSortedMap;
    static unmodifiable(paramarg0: Byte2BooleanSortedMap): Byte2BooleanSortedMap;
    private constructor()
}