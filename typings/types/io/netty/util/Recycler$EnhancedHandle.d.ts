import type { Recycler$Handle } from '../../../io/netty/util/Recycler$Handle.d.ts'
import type { Recycler$LocalPool } from '../../../io/netty/util/Recycler$LocalPool.d.ts'
import type { FastThreadLocal } from '../../../io/netty/util/concurrent/FastThreadLocal.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class Recycler$EnhancedHandle<T extends unknown> extends Object implements Recycler$Handle<T> {
    constructor(arg0: FastThreadLocal<Recycler$LocalPool<Object, T>>)
    unguardedRecycle(arg0: Object): void;
}