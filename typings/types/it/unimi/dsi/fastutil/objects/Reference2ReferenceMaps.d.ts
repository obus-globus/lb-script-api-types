import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ReferenceMaps extends Object {
    static EMPTY_MAP: Map<Object | null, Object | null>;
    static emptyMap(): Map<Object | null, Object | null>;
    static fastForEach(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Map<Object | null, Object | null>): Reference2ReferenceMap$Entry<Object, Object>[];
    static fastIterator(paramarg0: Map<Object | null, Object | null>): ObjectIterator<Reference2ReferenceMap$Entry<Object, Object>>;
    static singleton(paramarg0: Object | null, paramarg1: Object | null): Map<Object | null, Object | null>;
    static synchronize(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static synchronize(paramarg0: Map<Object | null, Object | null>, paramarg1: Object): Map<Object | null, Object | null>;
    static unmodifiable(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    private constructor()
}