import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Short2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatMap$Entry.d.ts'
import type { ShortComparator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortComparator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2FloatSortedMaps extends Object {
    static EMPTY_MAP: Short2FloatSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Short2FloatSortedMap): Short2FloatMap$Entry[];
    static fastIterator(paramarg0: Short2FloatSortedMap): ObjectBidirectionalIterator<Short2FloatMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Short2FloatSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Short2FloatSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Short2FloatSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Short2FloatSortedMap;
    static synchronize(paramarg0: Short2FloatSortedMap): Short2FloatSortedMap;
    static synchronize(paramarg0: Short2FloatSortedMap, paramarg1: Object): Short2FloatSortedMap;
    static unmodifiable(paramarg0: Short2FloatSortedMap): Short2FloatSortedMap;
    private constructor()
}