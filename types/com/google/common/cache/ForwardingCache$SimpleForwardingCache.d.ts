import type { Cache } from '../../../../com/google/common/cache/Cache.d.ts'
import type { ForwardingCache } from '../../../../com/google/common/cache/ForwardingCache.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ForwardingCache$SimpleForwardingCache<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends ForwardingCache<K, V> {
    constructor(delegate: Cache<K, V>)
    // private delegate: Cache<K, V>;
    delegate(): Cache<K, V>;
}