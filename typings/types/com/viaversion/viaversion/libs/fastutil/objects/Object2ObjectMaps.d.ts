import type { ObjectIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Object2ObjectMaps extends Object {
    static emptyMap(): Map<Object | null, Object | null>;
    static fastForEach(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Map<Object | null, Object | null>): K[];
    static fastIterator(paramarg0: Map<Object | null, Object | null>): ObjectIterator<Object>;
    static singleton(paramarg0: Object | null, paramarg1: Object | null): Map<Object | null, Object | null>;
    static synchronize(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static synchronize(paramarg0: Map<Object | null, Object | null>, paramarg1: Object): Map<Object | null, Object | null>;
    static unmodifiable(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    private constructor()
}