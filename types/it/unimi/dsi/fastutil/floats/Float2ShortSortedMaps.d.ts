import type { Float2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortMap$Entry.d.ts'
import type { FloatComparator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ShortSortedMaps extends Object {
    static EMPTY_MAP: Float2ShortSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Float2ShortSortedMap): Float2ShortMap$Entry[];
    static fastIterator(paramarg0: Float2ShortSortedMap): ObjectBidirectionalIterator<Float2ShortMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Float2ShortSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Float2ShortSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Float2ShortSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): Float2ShortSortedMap;
    static synchronize(paramarg0: Float2ShortSortedMap): Float2ShortSortedMap;
    static synchronize(paramarg0: Float2ShortSortedMap, paramarg1: Object): Float2ShortSortedMap;
    static unmodifiable(paramarg0: Float2ShortSortedMap): Float2ShortSortedMap;
    private constructor()
}