import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Short2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongMap$Entry.d.ts'
import type { ShortComparator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortComparator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2LongSortedMaps extends Object {
    static EMPTY_MAP: Short2LongSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Short2LongSortedMap): Short2LongMap$Entry[];
    static fastIterator(paramarg0: Short2LongSortedMap): ObjectBidirectionalIterator<Short2LongMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Short2LongSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Short2LongSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Short2LongSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Short2LongSortedMap;
    static synchronize(paramarg0: Short2LongSortedMap): Short2LongSortedMap;
    static synchronize(paramarg0: Short2LongSortedMap, paramarg1: Object): Short2LongSortedMap;
    static unmodifiable(paramarg0: Short2LongSortedMap): Short2LongSortedMap;
    private constructor()
}