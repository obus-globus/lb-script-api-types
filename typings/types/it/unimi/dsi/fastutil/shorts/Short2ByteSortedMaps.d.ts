import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Short2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ByteMap$Entry.d.ts'
import type { ShortComparator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortComparator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ByteSortedMaps extends Object {
    static EMPTY_MAP: Short2ByteSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Short2ByteSortedMap): Short2ByteMap$Entry[];
    static fastIterator(paramarg0: Short2ByteSortedMap): ObjectBidirectionalIterator<Short2ByteMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Short2ByteSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Short2ByteSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Short2ByteSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Short2ByteSortedMap;
    static synchronize(paramarg0: Short2ByteSortedMap): Short2ByteSortedMap;
    static synchronize(paramarg0: Short2ByteSortedMap, paramarg1: Object): Short2ByteSortedMap;
    static unmodifiable(paramarg0: Short2ByteSortedMap): Short2ByteSortedMap;
    private constructor()
}