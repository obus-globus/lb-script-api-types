import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { ShortComparator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortComparator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ObjectSortedMaps extends Object {
    static EMPTY_MAP: Short2ObjectSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Short2ObjectSortedMap<Object>;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Short2ObjectSortedMap<Object>): (Object | null)[];
    static fastIterator(paramarg0: Short2ObjectSortedMap<Object>): ObjectBidirectionalIterator<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Short2ObjectSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => kotlin.Int): Short2ObjectSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Short2ObjectSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => kotlin.Int): Short2ObjectSortedMap<Object>;
    static synchronize(paramarg0: Short2ObjectSortedMap<Object>): Short2ObjectSortedMap<Object>;
    static synchronize(paramarg0: Short2ObjectSortedMap<Object>, paramarg1: Object): Short2ObjectSortedMap<Object>;
    static unmodifiable(paramarg0: Short2ObjectSortedMap<Object>): Short2ObjectSortedMap<Object>;
    private constructor()
}