import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ObjectMaps extends Object {
    static EMPTY_MAP: Float2ObjectMaps$EmptyMap<Object>;
    static emptyMap(): Float2ObjectMap<Object>;
    static fastForEach(paramarg0: Float2ObjectMap<Object>, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Float2ObjectMap<Object>): K[];
    static fastIterator(paramarg0: Float2ObjectMap<Object>): ObjectIterator<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Float2ObjectMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Float2ObjectMap<Object>;
    static synchronize(paramarg0: Float2ObjectMap<Object>): Float2ObjectMap<Object>;
    static synchronize(paramarg0: Float2ObjectMap<Object>, paramarg1: Object): Float2ObjectMap<Object>;
    static unmodifiable(paramarg0: Float2ObjectMap<Object>): Float2ObjectMap<Object>;
    private constructor()
}