import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Cache } from '../../../../com/google/common/cache/Cache.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface LoadingCache<K extends unknown, V extends unknown> extends Function<K, V>, Cache<K, V>, Object{
    apply(key: K): V;
    asMap(): JavaMap<K, V>;
    get(key: K): V;
    getAll(keys: K[]): JavaMap<K, V>;
    getUnchecked(key: K): V;
    refresh(key: K): void;
}