import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { CacheLoader } from '../../../../com/google/common/cache/CacheLoader.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CacheLoader$SupplierToCacheLoader<V extends unknown> extends CacheLoader<Object, V> implements Serializable {
    static asyncReloading<K extends unknown, V extends unknown>(paramloader: CacheLoader<K, V>, paramexecutor: Executor): CacheLoader<K, V>;
    static from<K extends unknown, V extends unknown>(paramfunction: (param0: K) => V): CacheLoader<K, V>;
    static from<V extends unknown>(paramsupplier: () => V): CacheLoader<Object, V>;
    constructor(computingSupplier: () => V)
    // private computingSupplier: () => V;
    load(key: Object): V;
}