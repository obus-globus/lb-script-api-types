import type { Recycler$EnhancedHandle } from '../../../io/netty/util/Recycler$EnhancedHandle.d.ts'
import type { Recycler$LocalPool } from '../../../io/netty/util/Recycler$LocalPool.d.ts'
import type { Recycler$UnguardedLocalPool } from '../../../io/netty/util/Recycler$UnguardedLocalPool.d.ts'
import type { FastThreadLocal } from '../../../io/netty/util/concurrent/FastThreadLocal.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Recycler$LocalPoolHandle<T extends unknown> extends Recycler$EnhancedHandle<T> {
    constructor(arg0: Recycler$UnguardedLocalPool<Object>, arg1: FastThreadLocal<Recycler$LocalPool<Object, T>>)
    // private pool: Recycler$UnguardedLocalPool<T>;
    recycle(arg0: T): void;
    unguardedRecycle(arg0: Object): void;
}