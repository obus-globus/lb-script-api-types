import type { Object2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2IntMaps extends Object {
    static EMPTY_MAP: Object2IntMaps$EmptyMap<Object>;
    static emptyMap(): Object2IntMap<Object>;
    static fastForEach(paramarg0: Object2IntMap<Object>, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Object2IntMap<Object>): Object2IntMap$Entry<Object>[];
    static fastIterator(paramarg0: Object2IntMap<Object>): ObjectIterator<Object2IntMap$Entry<Object>>;
    static singleton(paramarg0: Object | null, paramarg1: number): Object2IntMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Object2IntMap<Object>;
    static synchronize(paramarg0: Object2IntMap<Object>): Object2IntMap<Object>;
    static synchronize(paramarg0: Object2IntMap<Object>, paramarg1: Object): Object2IntMap<Object>;
    static unmodifiable(paramarg0: Object2IntMap<Object>): Object2IntMap<Object>;
    private constructor()
}