import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { CacheLoader } from '../../../../com/google/common/cache/CacheLoader.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CacheLoader$FunctionToCacheLoader<K extends unknown, V extends unknown> extends CacheLoader<K, V> implements Serializable {
    static asyncReloading(paramloader: CacheLoader<Object, Object>, paramexecutor: Executor): CacheLoader<Object, Object>;
    static from(paramfunction: (param0: Object | null) => Object | null): CacheLoader<Object, Object>;
    static from(paramsupplier: () => Object | null): CacheLoader<Object, Object>;
    constructor(computingFunction: (param0: K) => V)
    // private computingFunction: (param0: K) => V;
    load(key: K): V;
}