import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Cache } from '../../../../com/google/common/cache/Cache.d.ts'
import type { CacheBuilder } from '../../../../com/google/common/cache/CacheBuilder.d.ts'
import type { CacheStats } from '../../../../com/google/common/cache/CacheStats.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Callable } from '../../../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocalCache$LocalManualCache<K extends unknown, V extends unknown> extends Object implements Cache<K, V>, Serializable {
    constructor(builder: CacheBuilder<K, V>)
    // private localCache: JavaMap<K, V>;
    asMap(): JavaMap<K, V>;
    cleanUp(): void;
    get(key: K, valueLoader: () => V): V;
    getAllPresent(keys: Object[]): JavaMap<K, V>;
    getIfPresent(key: Object): V;
    invalidate(key: Object): void;
    invalidateAll(): void;
    invalidateAll(keys: Object[]): void;
    put(key: K, value: V): void;
    putAll(m: JavaMap<K, V>): void;
    // private readObject(in_: ObjectInputStream): void;
    size(): number;
    stats(): CacheStats;
    writeReplace(): Object;
}