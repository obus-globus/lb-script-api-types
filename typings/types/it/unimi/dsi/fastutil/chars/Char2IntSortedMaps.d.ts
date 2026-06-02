import type { Char2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntMap$Entry.d.ts'
import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2IntSortedMaps extends Object {
    static EMPTY_MAP: Char2IntSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: string, param1: string) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Char2IntSortedMap): Char2IntMap$Entry[];
    static fastIterator(paramarg0: Char2IntSortedMap): ObjectBidirectionalIterator<Char2IntMap$Entry>;
    static singleton(paramarg0: string, paramarg1: number): Char2IntSortedMap;
    static singleton(paramarg0: string, paramarg1: number, paramarg2: (param0: string, param1: string) => kotlin.Int): Char2IntSortedMap;
    static singleton(paramarg0: string, paramarg1: number): Char2IntSortedMap;
    static singleton(paramarg0: string, paramarg1: number, paramarg2: (param0: string, param1: string) => kotlin.Int): Char2IntSortedMap;
    static synchronize(paramarg0: Char2IntSortedMap): Char2IntSortedMap;
    static synchronize(paramarg0: Char2IntSortedMap, paramarg1: Object): Char2IntSortedMap;
    static unmodifiable(paramarg0: Char2IntSortedMap): Char2IntSortedMap;
    private constructor()
}