import type { Float2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectMap$Entry.d.ts'
import type { FloatComparator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ObjectSortedMaps extends Object {
    static EMPTY_MAP: Float2ObjectSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Float2ObjectSortedMap<Object>;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Float2ObjectSortedMap<Object>): Float2ObjectMap$Entry<Object>[];
    static fastIterator(paramarg0: Float2ObjectSortedMap<Object>): ObjectBidirectionalIterator<Float2ObjectMap$Entry<Object>>;
    static singleton(paramarg0: number, paramarg1: Object | null): Float2ObjectSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => number): Float2ObjectSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Float2ObjectSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => number): Float2ObjectSortedMap<Object>;
    static synchronize(paramarg0: Float2ObjectSortedMap<Object>): Float2ObjectSortedMap<Object>;
    static synchronize(paramarg0: Float2ObjectSortedMap<Object>, paramarg1: Object): Float2ObjectSortedMap<Object>;
    static unmodifiable(paramarg0: Float2ObjectSortedMap<Object>): Float2ObjectSortedMap<Object>;
    private constructor()
}