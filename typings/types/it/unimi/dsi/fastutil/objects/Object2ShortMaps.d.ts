import type { Object2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ShortMaps extends Object {
    static EMPTY_MAP: Object2ShortMaps$EmptyMap<Object>;
    static emptyMap(): Object2ShortMap<Object>;
    static fastForEach(paramarg0: Object2ShortMap<Object>, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Object2ShortMap<Object>): Object2ShortMap$Entry<Object>[];
    static fastIterator(paramarg0: Object2ShortMap<Object>): ObjectIterator<Object2ShortMap$Entry<Object>>;
    static singleton(paramarg0: Object | null, paramarg1: number): Object2ShortMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Object2ShortMap<Object>;
    static synchronize(paramarg0: Object2ShortMap<Object>): Object2ShortMap<Object>;
    static synchronize(paramarg0: Object2ShortMap<Object>, paramarg1: Object): Object2ShortMap<Object>;
    static unmodifiable(paramarg0: Object2ShortMap<Object>): Object2ShortMap<Object>;
    private constructor()
}