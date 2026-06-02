import type { Float2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharMap$Entry.d.ts'
import type { FloatComparator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2CharSortedMaps extends Object {
    static EMPTY_MAP: Float2CharSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Float2CharSortedMap): Float2CharMap$Entry[];
    static fastIterator(paramarg0: Float2CharSortedMap): ObjectBidirectionalIterator<Float2CharMap$Entry>;
    static singleton(paramarg0: number, paramarg1: string): Float2CharSortedMap;
    static singleton(paramarg0: number, paramarg1: string, paramarg2: (param0: number, param1: number) => kotlin.Int): Float2CharSortedMap;
    static singleton(paramarg0: number, paramarg1: string): Float2CharSortedMap;
    static singleton(paramarg0: number, paramarg1: string, paramarg2: (param0: number, param1: number) => kotlin.Int): Float2CharSortedMap;
    static synchronize(paramarg0: Float2CharSortedMap): Float2CharSortedMap;
    static synchronize(paramarg0: Float2CharSortedMap, paramarg1: Object): Float2CharSortedMap;
    static unmodifiable(paramarg0: Float2CharSortedMap): Float2CharSortedMap;
    private constructor()
}