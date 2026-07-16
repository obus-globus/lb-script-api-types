import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { ListenableFuture } from '../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class CacheLoader<K extends unknown, V extends unknown> extends Object {
    static asyncReloading<K extends unknown, V extends unknown>(paramloader: CacheLoader<K, V>, paramexecutor: Executor): CacheLoader<K, V>;
    static from<K extends unknown, V extends unknown>(paramfunction: (param0: K) => V): CacheLoader<K, V>;
    static from<V extends unknown>(paramsupplier: () => V): CacheLoader<Object, V>;
    constructor()
    load(key: K): V;
    loadAll(keys: K[]): Map<K, V>;
    reload(key: K, oldValue: V): ListenableFuture<V>;
}