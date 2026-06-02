import type { MapIteratorCache } from '../../../../com/google/common/graph/MapIteratorCache.d.ts'
import type { MapRetrievalCache$CacheEntry } from '../../../../com/google/common/graph/MapRetrievalCache$CacheEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MapRetrievalCache<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends MapIteratorCache<K, V> {
    constructor(backingMap: Map<K, V>)
    // private cacheEntry1: MapRetrievalCache$CacheEntry<K, V>;
    // private cacheEntry2: MapRetrievalCache$CacheEntry<K, V>;
    // private addToCache(key: K, value: V): void;
    // private addToCache(entry: MapRetrievalCache$CacheEntry<K, V>): void;
    clearCache(): void;
    get(key: Object): V;
    getIfCached(key: Object): V;
}