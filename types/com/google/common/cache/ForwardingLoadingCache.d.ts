import type { ForwardingCache } from '../../../../com/google/common/cache/ForwardingCache.d.ts'
import type { LoadingCache } from '../../../../com/google/common/cache/LoadingCache.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ForwardingLoadingCache<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends ForwardingCache<K, V> implements LoadingCache<K, V> {
    constructor()
    apply(key: K): V;
    delegate(): LoadingCache<K, V>;
    get(key: K): V;
    getAll(keys: K[]): Map<K, V>;
    getUnchecked(key: K): V;
    refresh(key: K): void;
}