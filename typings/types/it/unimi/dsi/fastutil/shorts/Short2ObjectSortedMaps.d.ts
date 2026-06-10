import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Short2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectMap$Entry.d.ts'
import type { ShortComparator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortComparator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ObjectSortedMaps extends Object {
    static EMPTY_MAP: Short2ObjectSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Short2ObjectSortedMap<Object>;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Short2ObjectSortedMap<Object>): Short2ObjectMap$Entry<Object>[];
    static fastIterator(paramarg0: Short2ObjectSortedMap<Object>): ObjectBidirectionalIterator<Short2ObjectMap$Entry<Object>>;
    static singleton(paramarg0: number, paramarg1: Object | null): Short2ObjectSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => number): Short2ObjectSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Short2ObjectSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => number): Short2ObjectSortedMap<Object>;
    static synchronize(paramarg0: Short2ObjectSortedMap<Object>): Short2ObjectSortedMap<Object>;
    static synchronize(paramarg0: Short2ObjectSortedMap<Object>, paramarg1: Object): Short2ObjectSortedMap<Object>;
    static unmodifiable(paramarg0: Short2ObjectSortedMap<Object>): Short2ObjectSortedMap<Object>;
    private constructor()
}