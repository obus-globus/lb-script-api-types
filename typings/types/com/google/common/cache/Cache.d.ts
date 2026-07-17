import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { CacheStats } from '../../../../com/google/common/cache/CacheStats.d.ts'
import type { Callable } from '../../../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Cache<K extends unknown, V extends unknown> extends Object {
    asMap(): JavaMap<K, V>;
    cleanUp(): void;
    get(key: K, loader: () => V): V;
    getAllPresent(keys: (Object | null)[]): JavaMap<K, V>;
    getIfPresent(key: Object): V;
    invalidate(key: Object): void;
    invalidateAll(): void;
    invalidateAll(keys: (Object | null)[]): void;
    put(key: K, value: V): void;
    putAll(m: JavaMap<K, V>): void;
    size(): number;
    stats(): CacheStats;
}