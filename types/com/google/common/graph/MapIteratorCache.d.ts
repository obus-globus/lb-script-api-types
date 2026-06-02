import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class MapIteratorCache<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object {
    constructor(backingMap: Map<K, V>)
    // private backingMap: Map<K, V>;
    // private cacheEntry: Map$Entry<K, V>;
    clear(): void;
    clearCache(): void;
    containsKey(key: Object): boolean;
    get(key: Object): V;
    getIfCached(key: Object): V;
    getWithoutCaching(key: Object): V;
    put(key: K, value: V): V;
    remove(key: Object): V;
    unmodifiableKeySet(): K[];
}