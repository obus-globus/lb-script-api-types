import type { Object2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2LongMaps extends Object {
    static EMPTY_MAP: Object2LongMaps$EmptyMap<Object>;
    static emptyMap(): Object2LongMap<Object>;
    static fastForEach(paramarg0: Object2LongMap<Object>, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Object2LongMap<Object>): Object2LongMap$Entry<Object>[];
    static fastIterator(paramarg0: Object2LongMap<Object>): ObjectIterator<Object2LongMap$Entry<Object>>;
    static singleton(paramarg0: Object | null, paramarg1: number): Object2LongMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Object2LongMap<Object>;
    static synchronize(paramarg0: Object2LongMap<Object>): Object2LongMap<Object>;
    static synchronize(paramarg0: Object2LongMap<Object>, paramarg1: Object): Object2LongMap<Object>;
    static unmodifiable(paramarg0: Object2LongMap<Object>): Object2LongMap<Object>;
    private constructor()
}