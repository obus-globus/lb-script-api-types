import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2DoubleMaps extends Object {
    static EMPTY_MAP: Object2DoubleMaps$EmptyMap<Object>;
    static emptyMap(): Object2DoubleMap<Object>;
    static fastForEach(paramarg0: Object2DoubleMap<Object>, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Object2DoubleMap<Object>): K[];
    static fastIterator(paramarg0: Object2DoubleMap<Object>): ObjectIterator<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Object2DoubleMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Object2DoubleMap<Object>;
    static synchronize(paramarg0: Object2DoubleMap<Object>): Object2DoubleMap<Object>;
    static synchronize(paramarg0: Object2DoubleMap<Object>, paramarg1: Object): Object2DoubleMap<Object>;
    static unmodifiable(paramarg0: Object2DoubleMap<Object>): Object2DoubleMap<Object>;
    private constructor()
}