import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2CharMaps extends Object {
    static EMPTY_MAP: Object2CharMaps$EmptyMap<Object>;
    static emptyMap(): Object2CharMap<Object>;
    static fastForEach(paramarg0: Object2CharMap<Object>, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Object2CharMap<Object>): K[];
    static fastIterator(paramarg0: Object2CharMap<Object>): ObjectIterator<Object>;
    static singleton(paramarg0: Object | null, paramarg1: string): Object2CharMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: string): Object2CharMap<Object>;
    static synchronize(paramarg0: Object2CharMap<Object>): Object2CharMap<Object>;
    static synchronize(paramarg0: Object2CharMap<Object>, paramarg1: Object): Object2CharMap<Object>;
    static unmodifiable(paramarg0: Object2CharMap<Object>): Object2CharMap<Object>;
    private constructor()
}