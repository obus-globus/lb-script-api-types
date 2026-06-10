import type { Int2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ReferenceMaps extends Object {
    static EMPTY_MAP: Int2ReferenceMaps$EmptyMap<Object>;
    static emptyMap(): Int2ReferenceMap<Object>;
    static fastForEach(paramarg0: Int2ReferenceMap<Object>, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Int2ReferenceMap<Object>): Int2ReferenceMap$Entry<Object>[];
    static fastIterator(paramarg0: Int2ReferenceMap<Object>): ObjectIterator<Int2ReferenceMap$Entry<Object>>;
    static singleton(paramarg0: number, paramarg1: Object | null): Int2ReferenceMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Int2ReferenceMap<Object>;
    static synchronize(paramarg0: Int2ReferenceMap<Object>): Int2ReferenceMap<Object>;
    static synchronize(paramarg0: Int2ReferenceMap<Object>, paramarg1: Object): Int2ReferenceMap<Object>;
    static unmodifiable(paramarg0: Int2ReferenceMap<Object>): Int2ReferenceMap<Object>;
    private constructor()
}