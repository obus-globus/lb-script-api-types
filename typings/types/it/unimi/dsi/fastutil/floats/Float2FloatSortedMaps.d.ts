import type { Float2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatMap$Entry.d.ts'
import type { FloatComparator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2FloatSortedMaps extends Object {
    static EMPTY_MAP: Float2FloatSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Float2FloatSortedMap): Float2FloatMap$Entry[];
    static fastIterator(paramarg0: Float2FloatSortedMap): ObjectBidirectionalIterator<Float2FloatMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Float2FloatSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Float2FloatSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Float2FloatSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Float2FloatSortedMap;
    static synchronize(paramarg0: Float2FloatSortedMap): Float2FloatSortedMap;
    static synchronize(paramarg0: Float2FloatSortedMap, paramarg1: Object): Float2FloatSortedMap;
    static unmodifiable(paramarg0: Float2FloatSortedMap): Float2FloatSortedMap;
    private constructor()
}