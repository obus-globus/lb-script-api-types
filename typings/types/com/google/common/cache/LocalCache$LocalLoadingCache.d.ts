import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { CacheBuilder } from '../../../../com/google/common/cache/CacheBuilder.d.ts'
import type { CacheLoader } from '../../../../com/google/common/cache/CacheLoader.d.ts'
import type { LoadingCache } from '../../../../com/google/common/cache/LoadingCache.d.ts'
import type { LocalCache$LocalManualCache } from '../../../../com/google/common/cache/LocalCache$LocalManualCache.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { Callable } from '../../../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocalCache$LocalLoadingCache<K extends unknown, V extends unknown> extends LocalCache$LocalManualCache<K, V> implements LoadingCache<K, V> {
    constructor(builder: CacheBuilder<K, V>, loader: CacheLoader<K, V>)
    apply(key: K): V;
    get(key: K): V;
    get(key: K, valueLoader: () => V): V;
    getAll(keys: K[]): JavaMap<K, V>;
    getUnchecked(key: K): V;
    // private readObject(in_: ObjectInputStream): void;
    refresh(key: K): void;
    writeReplace(): Object;
}