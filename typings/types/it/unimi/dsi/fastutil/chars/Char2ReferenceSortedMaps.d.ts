import type { Char2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceMap$Entry.d.ts'
import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ReferenceSortedMaps extends Object {
    static EMPTY_MAP: Char2ReferenceSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Char2ReferenceSortedMap<Object>;
    static entryComparator(paramarg0: (param0: string, param1: string) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Char2ReferenceSortedMap<Object>): Char2ReferenceMap$Entry<Object>[];
    static fastIterator(paramarg0: Char2ReferenceSortedMap<Object>): ObjectBidirectionalIterator<Char2ReferenceMap$Entry<Object>>;
    static singleton(paramarg0: string, paramarg1: Object | null): Char2ReferenceSortedMap<Object>;
    static singleton(paramarg0: string, paramarg1: Object | null, paramarg2: (param0: string, param1: string) => number): Char2ReferenceSortedMap<Object>;
    static singleton(paramarg0: string, paramarg1: Object | null): Char2ReferenceSortedMap<Object>;
    static singleton(paramarg0: string, paramarg1: Object | null, paramarg2: (param0: string, param1: string) => number): Char2ReferenceSortedMap<Object>;
    static synchronize(paramarg0: Char2ReferenceSortedMap<Object>): Char2ReferenceSortedMap<Object>;
    static synchronize(paramarg0: Char2ReferenceSortedMap<Object>, paramarg1: Object): Char2ReferenceSortedMap<Object>;
    static unmodifiable(paramarg0: Char2ReferenceSortedMap<Object>): Char2ReferenceSortedMap<Object>;
    private constructor()
}