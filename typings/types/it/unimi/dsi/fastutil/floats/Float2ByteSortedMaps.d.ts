import type { Float2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteMap$Entry.d.ts'
import type { FloatComparator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ByteSortedMaps extends Object {
    static EMPTY_MAP: Float2ByteSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Float2ByteSortedMap): Float2ByteMap$Entry[];
    static fastIterator(paramarg0: Float2ByteSortedMap): ObjectBidirectionalIterator<Float2ByteMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Float2ByteSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Float2ByteSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Float2ByteSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Float2ByteSortedMap;
    static synchronize(paramarg0: Float2ByteSortedMap): Float2ByteSortedMap;
    static synchronize(paramarg0: Float2ByteSortedMap, paramarg1: Object): Float2ByteSortedMap;
    static unmodifiable(paramarg0: Float2ByteSortedMap): Float2ByteSortedMap;
    private constructor()
}