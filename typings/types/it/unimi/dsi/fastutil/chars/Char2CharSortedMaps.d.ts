import type { Char2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharMap$Entry.d.ts'
import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2CharSortedMaps extends Object {
    static EMPTY_MAP: Char2CharSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: string, param1: string) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Char2CharSortedMap): Char2CharMap$Entry[];
    static fastIterator(paramarg0: Char2CharSortedMap): ObjectBidirectionalIterator<Char2CharMap$Entry>;
    static singleton(paramarg0: string, paramarg1: string): Char2CharSortedMap;
    static singleton(paramarg0: string, paramarg1: string, paramarg2: (param0: string, param1: string) => kotlin.Int): Char2CharSortedMap;
    static singleton(paramarg0: string, paramarg1: string): Char2CharSortedMap;
    static singleton(paramarg0: string, paramarg1: string, paramarg2: (param0: string, param1: string) => kotlin.Int): Char2CharSortedMap;
    static synchronize(paramarg0: Char2CharSortedMap): Char2CharSortedMap;
    static synchronize(paramarg0: Char2CharSortedMap, paramarg1: Object): Char2CharSortedMap;
    static unmodifiable(paramarg0: Char2CharSortedMap): Char2CharSortedMap;
    private constructor()
}