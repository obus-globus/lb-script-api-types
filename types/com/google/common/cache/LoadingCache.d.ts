import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Cache } from '../../../../com/google/common/cache/Cache.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface LoadingCache<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Function<K, V>, Cache<K, V>, Object{
    apply(key: K): V;
    asMap(): Map<K, V>;
    get(key: K): V;
    getAll(keys: K[]): Map<K, V>;
    getUnchecked(key: K): V;
    refresh(key: K): void;
}