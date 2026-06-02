import type { ReferenceQueue } from '../../../../../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { SoftReference } from '../../../../../../../../java/lang/ref/SoftReference.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class LocaleObjectCache$CacheEntry<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends SoftReference<V> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(key: K, value: V, queue: ReferenceQueue<V>)
    // private _key: K;
    getKey(): K;
}