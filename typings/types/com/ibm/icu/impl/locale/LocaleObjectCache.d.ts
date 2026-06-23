import type { LocaleObjectCache$CacheEntry } from '../../../../../com/ibm/icu/impl/locale/LocaleObjectCache$CacheEntry.d.ts'
import type { ReferenceQueue } from '../../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class LocaleObjectCache<K extends unknown, V extends unknown> extends Object {
    constructor()
    constructor(arg0: number, arg1: number, arg2: number)
    // private _map: Map<K, LocaleObjectCache$CacheEntry<K, V>>;
    // private _queue: ReferenceQueue<V>;
    // private cleanStaleEntries(): void;
    createObject(arg0: K): V;
    get(arg0: K): V;
    normalizeKey(arg0: K): K;
}