import type { Int2ObjectMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2ObjectMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Int2ObjectMaps extends Object {
    static emptyMap(): Int2ObjectMap<Object>;
    static fastForEach(paramarg0: Int2ObjectMap<Object>, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Int2ObjectMap<Object>): Int2ObjectMap$Entry<Object>[];
    static fastIterator(paramarg0: Int2ObjectMap<Object>): ObjectIterator<Int2ObjectMap$Entry<Object>>;
    static singleton(paramarg0: number, paramarg1: Object | null): Int2ObjectMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Int2ObjectMap<Object>;
    static synchronize(paramarg0: Int2ObjectMap<Object>): Int2ObjectMap<Object>;
    static synchronize(paramarg0: Int2ObjectMap<Object>, paramarg1: Object): Int2ObjectMap<Object>;
    static unmodifiable(paramarg0: Int2ObjectMap<Object>): Int2ObjectMap<Object>;
    private constructor()
}