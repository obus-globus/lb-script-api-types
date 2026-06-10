import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ReferenceMaps extends Object {
    static EMPTY_MAP: Short2ReferenceMaps$EmptyMap<Object>;
    static emptyMap(): Short2ReferenceMap<Object>;
    static fastForEach(paramarg0: Short2ReferenceMap<Object>, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Short2ReferenceMap<Object>): Short2ReferenceMap$Entry<Object>[];
    static fastIterator(paramarg0: Short2ReferenceMap<Object>): ObjectIterator<Short2ReferenceMap$Entry<Object>>;
    static singleton(paramarg0: number, paramarg1: Object | null): Short2ReferenceMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Short2ReferenceMap<Object>;
    static synchronize(paramarg0: Short2ReferenceMap<Object>): Short2ReferenceMap<Object>;
    static synchronize(paramarg0: Short2ReferenceMap<Object>, paramarg1: Object): Short2ReferenceMap<Object>;
    static unmodifiable(paramarg0: Short2ReferenceMap<Object>): Short2ReferenceMap<Object>;
    private constructor()
}