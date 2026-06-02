import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { ShortComparator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortComparator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ReferenceSortedMaps extends Object {
    static EMPTY_MAP: Short2ReferenceSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Short2ReferenceSortedMap<Object>;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Short2ReferenceSortedMap<Object>): (Object | null)[];
    static fastIterator(paramarg0: Short2ReferenceSortedMap<Object>): ObjectBidirectionalIterator<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Short2ReferenceSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => kotlin.Int): Short2ReferenceSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Short2ReferenceSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => kotlin.Int): Short2ReferenceSortedMap<Object>;
    static synchronize(paramarg0: Short2ReferenceSortedMap<Object>): Short2ReferenceSortedMap<Object>;
    static synchronize(paramarg0: Short2ReferenceSortedMap<Object>, paramarg1: Object): Short2ReferenceSortedMap<Object>;
    static unmodifiable(paramarg0: Short2ReferenceSortedMap<Object>): Short2ReferenceSortedMap<Object>;
    private constructor()
}