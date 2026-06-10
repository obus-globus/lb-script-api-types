import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Short2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ShortMap$Entry.d.ts'
import type { ShortComparator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortComparator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ShortSortedMaps extends Object {
    static EMPTY_MAP: Short2ShortSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Short2ShortSortedMap): Short2ShortMap$Entry[];
    static fastIterator(paramarg0: Short2ShortSortedMap): ObjectBidirectionalIterator<Short2ShortMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Short2ShortSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Short2ShortSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Short2ShortSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Short2ShortSortedMap;
    static synchronize(paramarg0: Short2ShortSortedMap): Short2ShortSortedMap;
    static synchronize(paramarg0: Short2ShortSortedMap, paramarg1: Object): Short2ShortSortedMap;
    static unmodifiable(paramarg0: Short2ShortSortedMap): Short2ShortSortedMap;
    private constructor()
}