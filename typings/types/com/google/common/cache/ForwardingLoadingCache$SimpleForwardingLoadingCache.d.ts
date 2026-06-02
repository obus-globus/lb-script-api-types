import type { ForwardingLoadingCache } from '../../../../com/google/common/cache/ForwardingLoadingCache.d.ts'
import type { LoadingCache } from '../../../../com/google/common/cache/LoadingCache.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ForwardingLoadingCache$SimpleForwardingLoadingCache<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends ForwardingLoadingCache<K, V> {
    constructor(delegate: LoadingCache<K, V>)
    // private delegate: LoadingCache<K, V>;
    delegate(): LoadingCache<K, V>;
}