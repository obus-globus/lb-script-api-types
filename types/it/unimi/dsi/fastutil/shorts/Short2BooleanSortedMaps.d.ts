import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Short2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanMap$Entry.d.ts'
import type { ShortComparator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortComparator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2BooleanSortedMaps extends Object {
    static EMPTY_MAP: Short2BooleanSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Short2BooleanSortedMap): Short2BooleanMap$Entry[];
    static fastIterator(paramarg0: Short2BooleanSortedMap): ObjectBidirectionalIterator<Short2BooleanMap$Entry>;
    static singleton(paramarg0: number, paramarg1: boolean): Short2BooleanSortedMap;
    static singleton(paramarg0: number, paramarg1: boolean, paramarg2: (param0: number, param1: number) => kotlin.Int): Short2BooleanSortedMap;
    static singleton(paramarg0: number, paramarg1: boolean): Short2BooleanSortedMap;
    static singleton(paramarg0: number, paramarg1: boolean, paramarg2: (param0: number, param1: number) => kotlin.Int): Short2BooleanSortedMap;
    static synchronize(paramarg0: Short2BooleanSortedMap): Short2BooleanSortedMap;
    static synchronize(paramarg0: Short2BooleanSortedMap, paramarg1: Object): Short2BooleanSortedMap;
    static unmodifiable(paramarg0: Short2BooleanSortedMap): Short2BooleanSortedMap;
    private constructor()
}