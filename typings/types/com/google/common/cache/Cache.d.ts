import type { CacheStats } from '../../../../com/google/common/cache/CacheStats.d.ts'
import type { Callable } from '../../../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Cache<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object{
    asMap(): Map<K, V>;
    cleanUp(): void;
    get(key: K, loader: () => V): V;
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