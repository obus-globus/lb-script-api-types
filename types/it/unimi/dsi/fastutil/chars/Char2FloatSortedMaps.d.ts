import type { Char2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatMap$Entry.d.ts'
import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2FloatSortedMaps extends Object {
    static EMPTY_MAP: Char2FloatSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: string, param1: string) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Char2FloatSortedMap): Char2FloatMap$Entry[];
    static fastIterator(paramarg0: Char2FloatSortedMap): ObjectBidirectionalIterator<Char2FloatMap$Entry>;
    static singleton(paramarg0: string, paramarg1: number): Char2FloatSortedMap;
    static singleton(paramarg0: string, paramarg1: number, paramarg2: (param0: string, param1: string) => kotlin.Int): Char2FloatSortedMap;
    static singleton(paramarg0: string, paramarg1: number): Char2FloatSortedMap;
    static singleton(paramarg0: string, paramarg1: number, paramarg2: (param0: string, param1: string) => kotlin.Int): Char2FloatSortedMap;
    static synchronize(paramarg0: Char2FloatSortedMap): Char2FloatSortedMap;
    static synchronize(paramarg0: Char2FloatSortedMap, paramarg1: Object): Char2FloatSortedMap;
    static unmodifiable(paramarg0: Char2FloatSortedMap): Char2FloatSortedMap;
    private constructor()
}