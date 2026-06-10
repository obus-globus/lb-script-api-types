import type { Long2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortMap$Entry.d.ts'
import type { LongComparator } from '../../../../../it/unimi/dsi/fastutil/longs/LongComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ShortSortedMaps extends Object {
    static EMPTY_MAP: Long2ShortSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Long2ShortSortedMap): Long2ShortMap$Entry[];
    static fastIterator(paramarg0: Long2ShortSortedMap): ObjectBidirectionalIterator<Long2ShortMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Long2ShortSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Long2ShortSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Long2ShortSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Long2ShortSortedMap;
    static synchronize(paramarg0: Long2ShortSortedMap): Long2ShortSortedMap;
    static synchronize(paramarg0: Long2ShortSortedMap, paramarg1: Object): Long2ShortSortedMap;
    static unmodifiable(paramarg0: Long2ShortSortedMap): Long2ShortSortedMap;
    private constructor()
}