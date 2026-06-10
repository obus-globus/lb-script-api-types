import type { Long2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharMap$Entry.d.ts'
import type { LongComparator } from '../../../../../it/unimi/dsi/fastutil/longs/LongComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2CharSortedMaps extends Object {
    static EMPTY_MAP: Long2CharSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Long2CharSortedMap): Long2CharMap$Entry[];
    static fastIterator(paramarg0: Long2CharSortedMap): ObjectBidirectionalIterator<Long2CharMap$Entry>;
    static singleton(paramarg0: number, paramarg1: string): Long2CharSortedMap;
    static singleton(paramarg0: number, paramarg1: string, paramarg2: (param0: number, param1: number) => number): Long2CharSortedMap;
    static singleton(paramarg0: number, paramarg1: string): Long2CharSortedMap;
    static singleton(paramarg0: number, paramarg1: string, paramarg2: (param0: number, param1: number) => number): Long2CharSortedMap;
    static synchronize(paramarg0: Long2CharSortedMap): Long2CharSortedMap;
    static synchronize(paramarg0: Long2CharSortedMap, paramarg1: Object): Long2CharSortedMap;
    static unmodifiable(paramarg0: Long2CharSortedMap): Long2CharSortedMap;
    private constructor()
}