import type { Float2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntMap$Entry.d.ts'
import type { FloatComparator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2IntSortedMaps extends Object {
    static EMPTY_MAP: Float2IntSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Float2IntSortedMap): Float2IntMap$Entry[];
    static fastIterator(paramarg0: Float2IntSortedMap): ObjectBidirectionalIterator<Float2IntMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Float2IntSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Float2IntSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Float2IntSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Float2IntSortedMap;
    static synchronize(paramarg0: Float2IntSortedMap): Float2IntSortedMap;
    static synchronize(paramarg0: Float2IntSortedMap, paramarg1: Object): Float2IntSortedMap;
    static unmodifiable(paramarg0: Float2IntSortedMap): Float2IntSortedMap;
    private constructor()
}