import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ObjectMaps extends Object {
    static EMPTY_MAP: Int2ObjectMaps$EmptyMap<Object>;
    static emptyMap(): Int2ObjectMap<Object>;
    static fastForEach(paramarg0: Int2ObjectMap<Object>, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Int2ObjectMap<Object>): K[];
    static fastIterator(paramarg0: Int2ObjectMap<Object>): ObjectIterator<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Int2ObjectMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Int2ObjectMap<Object>;
    static synchronize(paramarg0: Int2ObjectMap<Object>): Int2ObjectMap<Object>;
    static synchronize(paramarg0: Int2ObjectMap<Object>, paramarg1: Object): Int2ObjectMap<Object>;
    static unmodifiable(paramarg0: Int2ObjectMap<Object>): Int2ObjectMap<Object>;
    private constructor()
}