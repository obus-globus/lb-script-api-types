import type { Recycler } from '../../../io/netty/util/Recycler.d.ts'
import type { Recycler$DefaultHandle } from '../../../io/netty/util/Recycler$DefaultHandle.d.ts'
import type { Recycler$LocalPool } from '../../../io/netty/util/Recycler$LocalPool.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Recycler$GuardedLocalPool<T extends Object | number | string | boolean> extends Recycler$LocalPool<Recycler$DefaultHandle<T>, T> {
    constructor(arg0: Thread, arg1: number, arg2: number, arg3: number)
    constructor(arg0: number)
    constructor(arg0: number, arg1: number, arg2: number)
    getWith(arg0: Recycler<T>): T;
}