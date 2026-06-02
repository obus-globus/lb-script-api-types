import type { Byte2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharMap$Entry.d.ts'
import type { ByteComparator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2CharSortedMaps extends Object {
    static EMPTY_MAP: Byte2CharSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Byte2CharSortedMap): Byte2CharMap$Entry[];
    static fastIterator(paramarg0: Byte2CharSortedMap): ObjectBidirectionalIterator<Byte2CharMap$Entry>;
    static singleton(paramarg0: number, paramarg1: string): Byte2CharSortedMap;
    static singleton(paramarg0: number, paramarg1: string, paramarg2: (param0: number, param1: number) => kotlin.Int): Byte2CharSortedMap;
    static singleton(paramarg0: number, paramarg1: string): Byte2CharSortedMap;
    static singleton(paramarg0: number, paramarg1: string, paramarg2: (param0: number, param1: number) => kotlin.Int): Byte2CharSortedMap;
    static synchronize(paramarg0: Byte2CharSortedMap): Byte2CharSortedMap;
    static synchronize(paramarg0: Byte2CharSortedMap, paramarg1: Object): Byte2CharSortedMap;
    static unmodifiable(paramarg0: Byte2CharSortedMap): Byte2CharSortedMap;
    private constructor()
}