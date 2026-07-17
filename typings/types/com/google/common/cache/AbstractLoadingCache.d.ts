import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AbstractCache } from '../../../../com/google/common/cache/AbstractCache.d.ts'
import type { LoadingCache } from '../../../../com/google/common/cache/LoadingCache.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractLoadingCache<K extends unknown, V extends unknown> extends AbstractCache<K, V> implements LoadingCache<K, V> {
    constructor()
    apply(key: K): V;
    getAll(keys: K[]): JavaMap<K, V>;
    getUnchecked(key: K): V;
    refresh(key: K): void;
}