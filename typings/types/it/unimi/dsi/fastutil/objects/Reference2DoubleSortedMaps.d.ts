import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Reference2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2DoubleMap$Entry.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2DoubleSortedMaps extends Object {
    static EMPTY_MAP: Reference2DoubleSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Reference2DoubleSortedMap<Object>;
    static entryComparator(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static fastIterable(paramarg0: Reference2DoubleSortedMap<Object>): Reference2DoubleMap$Entry<Object>[];
    static fastIterator(paramarg0: Reference2DoubleSortedMap<Object>): ObjectBidirectionalIterator<Reference2DoubleMap$Entry<Object>>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2DoubleSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object) => boolean): Reference2DoubleSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Reference2DoubleSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object) => boolean): Reference2DoubleSortedMap<Object>;
    static synchronize(paramarg0: Reference2DoubleSortedMap<Object>): Reference2DoubleSortedMap<Object>;
    static synchronize(paramarg0: Reference2DoubleSortedMap<Object>, paramarg1: Object): Reference2DoubleSortedMap<Object>;
    static unmodifiable(paramarg0: Reference2DoubleSortedMap<Object>): Reference2DoubleSortedMap<Object>;
    private constructor()
}