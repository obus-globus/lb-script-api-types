import type { Char2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongMap$Entry.d.ts'
import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2LongSortedMaps extends Object {
    static EMPTY_MAP: Char2LongSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: string, param1: string) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Char2LongSortedMap): Char2LongMap$Entry[];
    static fastIterator(paramarg0: Char2LongSortedMap): ObjectBidirectionalIterator<Char2LongMap$Entry>;
    static singleton(paramarg0: string, paramarg1: number): Char2LongSortedMap;
    static singleton(paramarg0: string, paramarg1: number, paramarg2: (param0: string, param1: string) => kotlin.Int): Char2LongSortedMap;
    static singleton(paramarg0: string, paramarg1: number): Char2LongSortedMap;
    static singleton(paramarg0: string, paramarg1: number, paramarg2: (param0: string, param1: string) => kotlin.Int): Char2LongSortedMap;
    static synchronize(paramarg0: Char2LongSortedMap): Char2LongSortedMap;
    static synchronize(paramarg0: Char2LongSortedMap, paramarg1: Object): Char2LongSortedMap;
    static unmodifiable(paramarg0: Char2LongSortedMap): Char2LongSortedMap;
    private constructor()
}