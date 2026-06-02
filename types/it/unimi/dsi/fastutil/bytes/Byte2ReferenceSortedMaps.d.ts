import type { ByteComparator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ReferenceSortedMaps extends Object {
    static EMPTY_MAP: Byte2ReferenceSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Byte2ReferenceSortedMap<Object>;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Byte2ReferenceSortedMap<Object>): (Object | null)[];
    static fastIterator(paramarg0: Byte2ReferenceSortedMap<Object>): ObjectBidirectionalIterator<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Byte2ReferenceSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => kotlin.Int): Byte2ReferenceSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Byte2ReferenceSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => kotlin.Int): Byte2ReferenceSortedMap<Object>;
    static synchronize(paramarg0: Byte2ReferenceSortedMap<Object>): Byte2ReferenceSortedMap<Object>;
    static synchronize(paramarg0: Byte2ReferenceSortedMap<Object>, paramarg1: Object): Byte2ReferenceSortedMap<Object>;
    static unmodifiable(paramarg0: Byte2ReferenceSortedMap<Object>): Byte2ReferenceSortedMap<Object>;
    private constructor()
}