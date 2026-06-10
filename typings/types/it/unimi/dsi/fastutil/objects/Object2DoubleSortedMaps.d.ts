import type { Object2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleMap$Entry.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2DoubleSortedMaps extends Object {
    static EMPTY_MAP: Object2DoubleSortedMaps$EmptySortedMap<Object>;
    static emptyMap(): Object2DoubleSortedMap<Object>;
    static entryComparator(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static fastIterable(paramarg0: Object2DoubleSortedMap<Object>): Object2DoubleMap$Entry<Object>[];
    static fastIterator(paramarg0: Object2DoubleSortedMap<Object>): ObjectBidirectionalIterator<Object2DoubleMap$Entry<Object>>;
    static singleton(paramarg0: Object | null, paramarg1: number): Object2DoubleSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object) => boolean): Object2DoubleSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Object2DoubleSortedMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object) => boolean): Object2DoubleSortedMap<Object>;
    static synchronize(paramarg0: Object2DoubleSortedMap<Object>): Object2DoubleSortedMap<Object>;
    static synchronize(paramarg0: Object2DoubleSortedMap<Object>, paramarg1: Object): Object2DoubleSortedMap<Object>;
    static unmodifiable(paramarg0: Object2DoubleSortedMap<Object>): Object2DoubleSortedMap<Object>;
    private constructor()
}