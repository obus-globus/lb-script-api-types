import type { Float2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongMap$Entry.d.ts'
import type { FloatComparator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2LongSortedMaps extends Object {
    static EMPTY_MAP: Float2LongSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Float2LongSortedMap): Float2LongMap$Entry[];
    static fastIterator(paramarg0: Float2LongSortedMap): ObjectBidirectionalIterator<Float2LongMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Float2LongSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Float2LongSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Float2LongSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Float2LongSortedMap;
    static synchronize(paramarg0: Float2LongSortedMap): Float2LongSortedMap;
    static synchronize(paramarg0: Float2LongSortedMap, paramarg1: Object): Float2LongSortedMap;
    static unmodifiable(paramarg0: Float2LongSortedMap): Float2LongSortedMap;
    private constructor()
}