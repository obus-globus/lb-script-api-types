import type { CacheBuilder } from '../../../../com/google/common/cache/CacheBuilder.d.ts'
import type { CacheLoader } from '../../../../com/google/common/cache/CacheLoader.d.ts'
import type { LoadingCache } from '../../../../com/google/common/cache/LoadingCache.d.ts'
import type { LocalCache$LocalManualCache } from '../../../../com/google/common/cache/LocalCache$LocalManualCache.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocalCache$LocalLoadingCache<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends LocalCache$LocalManualCache<K, V> implements LoadingCache<K, V> {
    constructor(builder: CacheBuilder<K, V>, loader: CacheLoader<K, V>)
    apply(key: K): V;
    get(key: K): V;
    getAll(keys: K[]): Map<K, V>;
    getUnchecked(key: K): V;
    // private readObject(in_: ObjectInputStream): void;
    refresh(key: K): void;
    writeReplace(): Object;
}