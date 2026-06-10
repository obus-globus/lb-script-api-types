import type { Object2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2FloatMaps extends Object {
    static EMPTY_MAP: Object2FloatMaps$EmptyMap<Object>;
    static emptyMap(): Object2FloatMap<Object>;
    static fastForEach(paramarg0: Object2FloatMap<Object>, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Object2FloatMap<Object>): Object2FloatMap$Entry<Object>[];
    static fastIterator(paramarg0: Object2FloatMap<Object>): ObjectIterator<Object2FloatMap$Entry<Object>>;
    static singleton(paramarg0: Object | null, paramarg1: number): Object2FloatMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Object2FloatMap<Object>;
    static synchronize(paramarg0: Object2FloatMap<Object>): Object2FloatMap<Object>;
    static synchronize(paramarg0: Object2FloatMap<Object>, paramarg1: Object): Object2FloatMap<Object>;
    static unmodifiable(paramarg0: Object2FloatMap<Object>): Object2FloatMap<Object>;
    private constructor()
}