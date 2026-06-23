import type { Recycler } from '../../../../io/netty/util/Recycler.d.ts'
import type { ObjectPool } from '../../../../io/netty/util/internal/ObjectPool.d.ts'
import type { ObjectPool$ObjectCreator } from '../../../../io/netty/util/internal/ObjectPool$ObjectCreator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ObjectPool$RecyclerObjectPool<T extends unknown> extends ObjectPool<T> {
    static newPool(paramarg0: ObjectPool$ObjectCreator<Object>): ObjectPool<Object>;
    constructor(arg0: ObjectPool$ObjectCreator<T>)
    // private recycler: Recycler<T>;
    get(): T;
}