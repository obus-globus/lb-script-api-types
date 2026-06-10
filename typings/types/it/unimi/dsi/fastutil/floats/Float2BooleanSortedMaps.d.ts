import type { Float2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanMap$Entry.d.ts'
import type { FloatComparator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2BooleanSortedMaps extends Object {
    static EMPTY_MAP: Float2BooleanSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Float2BooleanSortedMap): Float2BooleanMap$Entry[];
    static fastIterator(paramarg0: Float2BooleanSortedMap): ObjectBidirectionalIterator<Float2BooleanMap$Entry>;
    static singleton(paramarg0: number, paramarg1: boolean): Float2BooleanSortedMap;
    static singleton(paramarg0: number, paramarg1: boolean, paramarg2: (param0: number, param1: number) => number): Float2BooleanSortedMap;
    static singleton(paramarg0: number, paramarg1: boolean): Float2BooleanSortedMap;
    static singleton(paramarg0: number, paramarg1: boolean, paramarg2: (param0: number, param1: number) => number): Float2BooleanSortedMap;
    static synchronize(paramarg0: Float2BooleanSortedMap): Float2BooleanSortedMap;
    static synchronize(paramarg0: Float2BooleanSortedMap, paramarg1: Object): Float2BooleanSortedMap;
    static unmodifiable(paramarg0: Float2BooleanSortedMap): Float2BooleanSortedMap;
    private constructor()
}