import type { Float2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ReferenceMaps extends Object {
    static EMPTY_MAP: Float2ReferenceMaps$EmptyMap<Object>;
    static emptyMap(): Float2ReferenceMap<Object>;
    static fastForEach(paramarg0: Float2ReferenceMap<Object>, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Float2ReferenceMap<Object>): Float2ReferenceMap$Entry<Object>[];
    static fastIterator(paramarg0: Float2ReferenceMap<Object>): ObjectIterator<Float2ReferenceMap$Entry<Object>>;
    static singleton(paramarg0: number, paramarg1: Object | null): Float2ReferenceMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Float2ReferenceMap<Object>;
    static synchronize(paramarg0: Float2ReferenceMap<Object>): Float2ReferenceMap<Object>;
    static synchronize(paramarg0: Float2ReferenceMap<Object>, paramarg1: Object): Float2ReferenceMap<Object>;
    static unmodifiable(paramarg0: Float2ReferenceMap<Object>): Float2ReferenceMap<Object>;
    private constructor()
}