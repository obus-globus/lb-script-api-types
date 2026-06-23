import type { Cache } from '../../../../com/google/common/cache/Cache.d.ts'
import type { CacheStats } from '../../../../com/google/common/cache/CacheStats.d.ts'
import type { ForwardingObject } from '../../../../com/google/common/collect/ForwardingObject.d.ts'
import type { Callable } from '../../../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ForwardingCache<K extends unknown, V extends unknown> extends ForwardingObject implements Cache<K, V> {
    constructor()
    asMap(): Map<K, V>;
    cleanUp(): void;
    delegate(): Cache<K, V>;
    get(key: K, valueLoader: () => V): V;
    getAllPresent(keys: (Object | null)[]): Map<K, V>;
    getIfPresent(key: Object): V;
    invalidate(key: Object): void;
    invalidateAll(): void;
    invalidateAll(keys: (Object | null)[]): void;
    put(key: K, value: V): void;
    putAll(m: Map<K, V>): void;
    size(): number;
    stats(): CacheStats;
}