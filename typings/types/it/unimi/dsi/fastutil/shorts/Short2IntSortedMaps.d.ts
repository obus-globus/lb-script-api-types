import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Short2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntMap$Entry.d.ts'
import type { ShortComparator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortComparator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2IntSortedMaps extends Object {
    static EMPTY_MAP: Short2IntSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Short2IntSortedMap): Short2IntMap$Entry[];
    static fastIterator(paramarg0: Short2IntSortedMap): ObjectBidirectionalIterator<Short2IntMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Short2IntSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Short2IntSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Short2IntSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Short2IntSortedMap;
    static synchronize(paramarg0: Short2IntSortedMap): Short2IntSortedMap;
    static synchronize(paramarg0: Short2IntSortedMap, paramarg1: Object): Short2IntSortedMap;
    static unmodifiable(paramarg0: Short2IntSortedMap): Short2IntSortedMap;
    private constructor()
}