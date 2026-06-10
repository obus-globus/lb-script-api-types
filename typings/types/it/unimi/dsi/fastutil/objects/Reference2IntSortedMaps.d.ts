import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Reference2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2IntMap$Entry.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2IntSortedMaps extends Object {
    static EMPTY_MAP: Reference2IntSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Reference2IntSortedMap<Object>;
    static entryComparator(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static fastIterable(paramarg0: Reference2IntSortedMap<Object>): Reference2IntMap$Entry<Object>[];
    static fastIterator(paramarg0: Reference2IntSortedMap<Object>): ObjectBidirectionalIterator<Reference2IntMap$Entry<Object>>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2IntSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object) => boolean): Reference2IntSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2IntSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object) => boolean): Reference2IntSortedMap<Object>;
    static synchronize(paramarg0: Reference2IntSortedMap<Object>): Reference2IntSortedMap<Object>;
    static synchronize(paramarg0: Reference2IntSortedMap<Object>, paramarg1: Object): Reference2IntSortedMap<Object>;
    static unmodifiable(paramarg0: Reference2IntSortedMap<Object>): Reference2IntSortedMap<Object>;
    private constructor()
}