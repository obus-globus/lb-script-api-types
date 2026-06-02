import type { LoadingCache } from '../../../../com/google/common/cache/LoadingCache.d.ts'
import type { LocalCache$ManualSerializationProxy } from '../../../../com/google/common/cache/LocalCache$ManualSerializationProxy.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocalCache$LoadingSerializationProxy<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends LocalCache$ManualSerializationProxy<K, V> implements LoadingCache<K, V> {
    constructor(cache: Map<K, V>)
    // private autoDelegate: LoadingCache<K, V>;
    apply(key: K): V;
    get(key: K): V;
    getAll(keys: K[]): Map<K, V>;
    getUnchecked(key: K): V;
    // private readObject(in_: ObjectInputStream): void;
    // private readResolve(): Object;
    refresh(key: K): void;
}