import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Reference2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ByteMap$Entry.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ByteSortedMaps extends Object {
    static EMPTY_MAP: Reference2ByteSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Reference2ByteSortedMap<Object>;
    static entryComparator(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static fastIterable(paramarg0: Reference2ByteSortedMap<Object>): Reference2ByteMap$Entry<Object>[];
    static fastIterator(paramarg0: Reference2ByteSortedMap<Object>): ObjectBidirectionalIterator<Reference2ByteMap$Entry<Object>>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2ByteSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object) => boolean): Reference2ByteSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2ByteSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object) => boolean): Reference2ByteSortedMap<Object>;
    static synchronize(paramarg0: Reference2ByteSortedMap<Object>): Reference2ByteSortedMap<Object>;
    static synchronize(paramarg0: Reference2ByteSortedMap<Object>, paramarg1: Object): Reference2ByteSortedMap<Object>;
    static unmodifiable(paramarg0: Reference2ByteSortedMap<Object>): Reference2ByteSortedMap<Object>;
    private constructor()
}