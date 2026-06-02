import type { Recycler } from '../../../io/netty/util/Recycler.d.ts'
import type { Recycler$EnhancedHandle } from '../../../io/netty/util/Recycler$EnhancedHandle.d.ts'
import type { Recycler$LocalPool } from '../../../io/netty/util/Recycler$LocalPool.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Recycler$UnguardedLocalPool<T extends Object | number | string | boolean> extends Recycler$LocalPool<T, T> {
    constructor(arg0: Thread, arg1: number, arg2: number, arg3: number)
    constructor(arg0: number)
    constructor(arg0: number, arg1: number, arg2: number)
    // private handle: Recycler$EnhancedHandle<T>;
    getWith(arg0: Recycler<T>): T;
}