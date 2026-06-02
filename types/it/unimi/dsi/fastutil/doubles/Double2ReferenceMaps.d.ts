import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ReferenceMaps extends Object {
    static EMPTY_MAP: Double2ReferenceMaps$EmptyMap<Object>;
    static emptyMap(): Double2ReferenceMap<Object>;
    static fastForEach(paramarg0: Double2ReferenceMap<Object>, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Double2ReferenceMap<Object>): K[];
    static fastIterator(paramarg0: Double2ReferenceMap<Object>): ObjectIterator<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Double2ReferenceMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Double2ReferenceMap<Object>;
    static synchronize(paramarg0: Double2ReferenceMap<Object>): Double2ReferenceMap<Object>;
    static synchronize(paramarg0: Double2ReferenceMap<Object>, paramarg1: Object): Double2ReferenceMap<Object>;
    static unmodifiable(paramarg0: Double2ReferenceMap<Object>): Double2ReferenceMap<Object>;
    private constructor()
}