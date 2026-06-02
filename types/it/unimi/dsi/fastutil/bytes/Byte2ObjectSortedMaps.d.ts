import type { ByteComparator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ObjectSortedMaps extends Object {
    static EMPTY_MAP: Byte2ObjectSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Byte2ObjectSortedMap<Object>;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Byte2ObjectSortedMap<Object>): (Object | null)[];
    static fastIterator(paramarg0: Byte2ObjectSortedMap<Object>): ObjectBidirectionalIterator<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Byte2ObjectSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => kotlin.Int): Byte2ObjectSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Byte2ObjectSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => kotlin.Int): Byte2ObjectSortedMap<Object>;
    static synchronize(paramarg0: Byte2ObjectSortedMap<Object>): Byte2ObjectSortedMap<Object>;
    static synchronize(paramarg0: Byte2ObjectSortedMap<Object>, paramarg1: Object): Byte2ObjectSortedMap<Object>;
    static unmodifiable(paramarg0: Byte2ObjectSortedMap<Object>): Byte2ObjectSortedMap<Object>;
    private constructor()
}