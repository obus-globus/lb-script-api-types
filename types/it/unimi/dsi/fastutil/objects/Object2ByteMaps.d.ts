import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ByteMaps extends Object {
    static EMPTY_MAP: Object2ByteMaps$EmptyMap<Object>;
    static emptyMap(): Object2ByteMap<Object>;
    static fastForEach(paramarg0: Object2ByteMap<Object>, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Object2ByteMap<Object>): K[];
    static fastIterator(paramarg0: Object2ByteMap<Object>): ObjectIterator<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Object2ByteMap<Object>;
    static singleton(paramarg0: Object | null, paramarg1: number): Object2ByteMap<Object>;
    static synchronize(paramarg0: Object2ByteMap<Object>): Object2ByteMap<Object>;
    static synchronize(paramarg0: Object2ByteMap<Object>, paramarg1: Object): Object2ByteMap<Object>;
    static unmodifiable(paramarg0: Object2ByteMap<Object>): Object2ByteMap<Object>;
    private constructor()
}