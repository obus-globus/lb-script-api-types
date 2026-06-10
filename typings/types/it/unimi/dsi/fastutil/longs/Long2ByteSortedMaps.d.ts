import type { Long2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteMap$Entry.d.ts'
import type { LongComparator } from '../../../../../it/unimi/dsi/fastutil/longs/LongComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ByteSortedMaps extends Object {
    static EMPTY_MAP: Long2ByteSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Long2ByteSortedMap): Long2ByteMap$Entry[];
    static fastIterator(paramarg0: Long2ByteSortedMap): ObjectBidirectionalIterator<Long2ByteMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Long2ByteSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Long2ByteSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Long2ByteSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Long2ByteSortedMap;
    static synchronize(paramarg0: Long2ByteSortedMap): Long2ByteSortedMap;
    static synchronize(paramarg0: Long2ByteSortedMap, paramarg1: Object): Long2ByteSortedMap;
    static unmodifiable(paramarg0: Long2ByteSortedMap): Long2ByteSortedMap;
    private constructor()
}