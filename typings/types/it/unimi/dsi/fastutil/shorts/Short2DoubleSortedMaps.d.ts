import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Short2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleMap$Entry.d.ts'
import type { ShortComparator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortComparator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2DoubleSortedMaps extends Object {
    static EMPTY_MAP: Short2DoubleSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Short2DoubleSortedMap): Short2DoubleMap$Entry[];
    static fastIterator(paramarg0: Short2DoubleSortedMap): ObjectBidirectionalIterator<Short2DoubleMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Short2DoubleSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Short2DoubleSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Short2DoubleSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Short2DoubleSortedMap;
    static synchronize(paramarg0: Short2DoubleSortedMap): Short2DoubleSortedMap;
    static synchronize(paramarg0: Short2DoubleSortedMap, paramarg1: Object): Short2DoubleSortedMap;
    static unmodifiable(paramarg0: Short2DoubleSortedMap): Short2DoubleSortedMap;
    private constructor()
}