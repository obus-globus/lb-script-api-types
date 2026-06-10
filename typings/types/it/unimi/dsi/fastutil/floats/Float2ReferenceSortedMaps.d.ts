import type { Float2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceMap$Entry.d.ts'
import type { FloatComparator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ReferenceSortedMaps extends Object {
    static EMPTY_MAP: Float2ReferenceSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Float2ReferenceSortedMap<Object>;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Float2ReferenceSortedMap<Object>): Float2ReferenceMap$Entry<Object>[];
    static fastIterator(paramarg0: Float2ReferenceSortedMap<Object>): ObjectBidirectionalIterator<Float2ReferenceMap$Entry<Object>>;
    static singleton(paramarg0: number, paramarg1: Object | null): Float2ReferenceSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => number): Float2ReferenceSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Float2ReferenceSortedMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => number): Float2ReferenceSortedMap<Object>;
    static synchronize(paramarg0: Float2ReferenceSortedMap<Object>): Float2ReferenceSortedMap<Object>;
    static synchronize(paramarg0: Float2ReferenceSortedMap<Object>, paramarg1: Object): Float2ReferenceSortedMap<Object>;
    static unmodifiable(paramarg0: Float2ReferenceSortedMap<Object>): Float2ReferenceSortedMap<Object>;
    private constructor()
}