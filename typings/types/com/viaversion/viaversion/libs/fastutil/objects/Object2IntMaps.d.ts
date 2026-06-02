import type { ObjectIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Object2IntMaps extends Object {
    static emptyMap(): Object2IntMap<Object>;
    static fastForEach(paramarg0: Object2IntMap<Object>, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Object2IntMap<Object>): K[];
    static fastIterator(paramarg0: Object2IntMap<Object>): ObjectIterator<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Object2IntMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Object2IntMap<Object>;
    static synchronize(paramarg0: Object2IntMap<Object>): Object2IntMap<Object>;
    static synchronize(paramarg0: Object2IntMap<Object>, paramarg1: Object): Object2IntMap<Object>;
    static unmodifiable(paramarg0: Object2IntMap<Object>): Object2IntMap<Object>;
    private constructor()
}