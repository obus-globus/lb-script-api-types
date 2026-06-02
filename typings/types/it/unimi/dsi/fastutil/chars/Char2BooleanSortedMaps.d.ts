import type { Char2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanMap$Entry.d.ts'
import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2BooleanSortedMaps extends Object {
    static EMPTY_MAP: Char2BooleanSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: string, param1: string) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Char2BooleanSortedMap): Char2BooleanMap$Entry[];
    static fastIterator(paramarg0: Char2BooleanSortedMap): ObjectBidirectionalIterator<Char2BooleanMap$Entry>;
    static singleton(paramarg0: string, paramarg1: boolean): Char2BooleanSortedMap;
    static singleton(paramarg0: string, paramarg1: boolean, paramarg2: (param0: string, param1: string) => kotlin.Int): Char2BooleanSortedMap;
    static singleton(paramarg0: string, paramarg1: boolean): Char2BooleanSortedMap;
    static singleton(paramarg0: string, paramarg1: boolean, paramarg2: (param0: string, param1: string) => kotlin.Int): Char2BooleanSortedMap;
    static synchronize(paramarg0: Char2BooleanSortedMap): Char2BooleanSortedMap;
    static synchronize(paramarg0: Char2BooleanSortedMap, paramarg1: Object): Char2BooleanSortedMap;
    static unmodifiable(paramarg0: Char2BooleanSortedMap): Char2BooleanSortedMap;
    private constructor()
}