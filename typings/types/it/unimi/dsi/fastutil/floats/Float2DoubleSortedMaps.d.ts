import type { Float2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleMap$Entry.d.ts'
import type { FloatComparator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2DoubleSortedMaps extends Object {
    static EMPTY_MAP: Float2DoubleSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Float2DoubleSortedMap): Float2DoubleMap$Entry[];
    static fastIterator(paramarg0: Float2DoubleSortedMap): ObjectBidirectionalIterator<Float2DoubleMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Float2DoubleSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Float2DoubleSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Float2DoubleSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Float2DoubleSortedMap;
    static synchronize(paramarg0: Float2DoubleSortedMap): Float2DoubleSortedMap;
    static synchronize(paramarg0: Float2DoubleSortedMap, paramarg1: Object): Float2DoubleSortedMap;
    static unmodifiable(paramarg0: Float2DoubleSortedMap): Float2DoubleSortedMap;
    private constructor()
}