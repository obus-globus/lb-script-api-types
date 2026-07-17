import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class MapIteratorCache<K extends unknown, V extends unknown> extends Object {
    constructor(backingMap: JavaMap<K, V>)
    // private backingMap: JavaMap<K, V>;
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