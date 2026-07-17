import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { ReferenceQueue } from '../../../../../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LocaleObjectCache$CacheEntry } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/LocaleObjectCache$CacheEntry.d.ts'
export abstract class LocaleObjectCache<K extends unknown, V extends unknown> extends Object {
    constructor()
    constructor(initialCapacity: number, loadFactor: number, concurrencyLevel: number)
    // private _map: JavaMap<K, LocaleObjectCache$CacheEntry<K, V>>;
    // private _queue: ReferenceQueue<V>;
    // private cleanStaleEntries(): void;
    createObject(key: K): V;
    get(key: K): V;
    normalizeKey(key: K): K;
}