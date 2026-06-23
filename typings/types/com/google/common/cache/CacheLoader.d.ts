import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { ListenableFuture } from '../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class CacheLoader<K extends unknown, V extends unknown> extends Object {
    static asyncReloading(paramloader: CacheLoader<Object, Object>, paramexecutor: Executor): CacheLoader<Object, Object>;
    static from(paramfunction: (param0: Object) => boolean): CacheLoader<Object, Object>;
    static from(paramsupplier: () => Object | null): CacheLoader<Object, Object>;
    constructor()
    load(key: K): V;
    loadAll(keys: K[]): Map<K, V>;
    reload(key: K, oldValue: V): ListenableFuture<V>;
}