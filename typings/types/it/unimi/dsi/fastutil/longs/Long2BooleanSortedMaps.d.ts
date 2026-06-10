import type { Long2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanMap$Entry.d.ts'
import type { LongComparator } from '../../../../../it/unimi/dsi/fastutil/longs/LongComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2BooleanSortedMaps extends Object {
    static EMPTY_MAP: Long2BooleanSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Long2BooleanSortedMap): Long2BooleanMap$Entry[];
    static fastIterator(paramarg0: Long2BooleanSortedMap): ObjectBidirectionalIterator<Long2BooleanMap$Entry>;
    static singleton(paramarg0: number, paramarg1: boolean): Long2BooleanSortedMap;
    static singleton(paramarg0: number, paramarg1: boolean, paramarg2: (param0: number, param1: number) => number): Long2BooleanSortedMap;
    static singleton(paramarg0: number, paramarg1: boolean): Long2BooleanSortedMap;
    static singleton(paramarg0: number, paramarg1: boolean, paramarg2: (param0: number, param1: number) => number): Long2BooleanSortedMap;
    static synchronize(paramarg0: Long2BooleanSortedMap): Long2BooleanSortedMap;
    static synchronize(paramarg0: Long2BooleanSortedMap, paramarg1: Object): Long2BooleanSortedMap;
    static unmodifiable(paramarg0: Long2BooleanSortedMap): Long2BooleanSortedMap;
    private constructor()
}