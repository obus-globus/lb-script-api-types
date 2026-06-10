import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Reference2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2FloatMap$Entry.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2FloatSortedMaps extends Object {
    static EMPTY_MAP: Reference2FloatSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Reference2FloatSortedMap<Object>;
    static entryComparator(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static fastIterable(paramarg0: Reference2FloatSortedMap<Object>): Reference2FloatMap$Entry<Object>[];
    static fastIterator(paramarg0: Reference2FloatSortedMap<Object>): ObjectBidirectionalIterator<Reference2FloatMap$Entry<Object>>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2FloatSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object) => boolean): Reference2FloatSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2FloatSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object) => boolean): Reference2FloatSortedMap<Object>;
    static synchronize(paramarg0: Reference2FloatSortedMap<Object>): Reference2FloatSortedMap<Object>;
    static synchronize(paramarg0: Reference2FloatSortedMap<Object>, paramarg1: Object): Reference2FloatSortedMap<Object>;
    static unmodifiable(paramarg0: Reference2FloatSortedMap<Object>): Reference2FloatSortedMap<Object>;
    private constructor()
}