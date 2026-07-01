import type { Recycler } from '../../../../io/netty/util/Recycler.d.ts'
import type { Promise } from '../../../../io/netty/util/concurrent/Promise.d.ts'
import type { ObjectPool$Handle } from '../../../../io/netty/util/internal/ObjectPool$Handle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class PendingWrite extends Object {
    static newInstance(paramarg0: Object, paramarg1: Promise<void>): PendingWrite;
    constructor(arg0: ObjectPool$Handle<Object>, arg1: Recycler<PendingWrite>)
    // private handle: ObjectPool$Handle<PendingWrite>;
    // private msg: Object;
    // private promise: Promise<void>;
    failAndRecycle(arg0: Throwable): boolean;
    msg(): Object;
    promise(): Promise<void>;
    recycle(): boolean;
    recycleAndGet(): Promise<void>;
    successAndRecycle(): boolean;
}