import type { Long2ObjectMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/longs/Long2ObjectMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Long2ObjectMaps extends Object {
    static emptyMap(): Long2ObjectMap<Object>;
    static fastForEach(paramarg0: Long2ObjectMap<Object>, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Long2ObjectMap<Object>): Long2ObjectMap$Entry<Object>[];
    static fastIterator(paramarg0: Long2ObjectMap<Object>): ObjectIterator<Long2ObjectMap$Entry<Object>>;
    static singleton(paramarg0: number, paramarg1: Object | null): Long2ObjectMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Long2ObjectMap<Object>;
    static synchronize(paramarg0: Long2ObjectMap<Object>): Long2ObjectMap<Object>;
    static synchronize(paramarg0: Long2ObjectMap<Object>, paramarg1: Object): Long2ObjectMap<Object>;
    static unmodifiable(paramarg0: Long2ObjectMap<Object>): Long2ObjectMap<Object>;
    private constructor()
}