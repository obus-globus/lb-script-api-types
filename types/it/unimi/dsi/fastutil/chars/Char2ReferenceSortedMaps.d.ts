import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ReferenceSortedMaps extends Object {
    static EMPTY_MAP: Char2ReferenceSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Char2ReferenceSortedMap<Object>;
    static entryComparator(paramarg0: (param0: string, param1: string) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Char2ReferenceSortedMap<Object>): (Object | null)[];
    static fastIterator(paramarg0: Char2ReferenceSortedMap<Object>): ObjectBidirectionalIterator<Object>;
    static singleton(paramarg0: string, paramarg1: Object | null): Char2ReferenceSortedMap<Object>;
    static singleton(paramarg0: string, paramarg1: Object | null, paramarg2: (param0: string, param1: string) => kotlin.Int): Char2ReferenceSortedMap<Object>;
    static singleton(paramarg0: string, paramarg1: Object | null): Char2ReferenceSortedMap<Object>;
    static singleton(paramarg0: string, paramarg1: Object | null, paramarg2: (param0: string, param1: string) => kotlin.Int): Char2ReferenceSortedMap<Object>;
    static synchronize(paramarg0: Char2ReferenceSortedMap<Object>): Char2ReferenceSortedMap<Object>;
    static synchronize(paramarg0: Char2ReferenceSortedMap<Object>, paramarg1: Object): Char2ReferenceSortedMap<Object>;
    static unmodifiable(paramarg0: Char2ReferenceSortedMap<Object>): Char2ReferenceSortedMap<Object>;
    private constructor()
}