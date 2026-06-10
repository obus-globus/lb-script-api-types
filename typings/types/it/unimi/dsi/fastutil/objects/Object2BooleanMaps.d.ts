import type { Object2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2BooleanMaps extends Object {
    static EMPTY_MAP: Object2BooleanMaps$EmptyMap<Object>;
    static emptyMap(): Object2BooleanMap<Object>;
    static fastForEach(paramarg0: Object2BooleanMap<Object>, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Object2BooleanMap<Object>): Object2BooleanMap$Entry<Object>[];
    static fastIterator(paramarg0: Object2BooleanMap<Object>): ObjectIterator<Object2BooleanMap$Entry<Object>>;
    static singleton(paramarg0: Object | null, paramarg1: boolean): Object2BooleanMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: boolean): Object2BooleanMap<Object>;
    static synchronize(paramarg0: Object2BooleanMap<Object>): Object2BooleanMap<Object>;
    static synchronize(paramarg0: Object2BooleanMap<Object>, paramarg1: Object): Object2BooleanMap<Object>;
    static unmodifiable(paramarg0: Object2BooleanMap<Object>): Object2BooleanMap<Object>;
    private constructor()
}