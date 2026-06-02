import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ObjectSortedMaps extends Object {
    static EMPTY_MAP: Char2ObjectSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Char2ObjectSortedMap<Object>;
    static entryComparator(paramarg0: (param0: string, param1: string) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Char2ObjectSortedMap<Object>): (Object | null)[];
    static fastIterator(paramarg0: Char2ObjectSortedMap<Object>): ObjectBidirectionalIterator<Object>;
    static singleton(paramarg0: string, paramarg1: Object | null): Char2ObjectSortedMap<Object>;
    static singleton(paramarg0: string, paramarg1: Object | null, paramarg2: (param0: string, param1: string) => kotlin.Int): Char2ObjectSortedMap<Object>;
    static singleton(paramarg0: string, paramarg1: Object | null): Char2ObjectSortedMap<Object>;
    static singleton(paramarg0: string, paramarg1: Object | null, paramarg2: (param0: string, param1: string) => kotlin.Int): Char2ObjectSortedMap<Object>;
    static synchronize(paramarg0: Char2ObjectSortedMap<Object>): Char2ObjectSortedMap<Object>;
    static synchronize(paramarg0: Char2ObjectSortedMap<Object>, paramarg1: Object): Char2ObjectSortedMap<Object>;
    static unmodifiable(paramarg0: Char2ObjectSortedMap<Object>): Char2ObjectSortedMap<Object>;
    private constructor()
}