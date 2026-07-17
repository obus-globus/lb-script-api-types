import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ForwardingCache } from '../../../../com/google/common/cache/ForwardingCache.d.ts'
import type { LoadingCache } from '../../../../com/google/common/cache/LoadingCache.d.ts'
import type { Callable } from '../../../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ForwardingLoadingCache<K extends unknown, V extends unknown> extends ForwardingCache<K, V> implements LoadingCache<K, V> {
    constructor()
    apply(key: K): V;
    delegate(): LoadingCache<K, V>;
    get(key: K): V;
    get(key: K, valueLoader: () => V): V;
    getAll(keys: K[]): JavaMap<K, V>;
    getUnchecked(key: K): V;
    refresh(key: K): void;
}