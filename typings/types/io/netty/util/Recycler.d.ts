import type { Recycler$Handle } from '../../../io/netty/util/Recycler$Handle.d.ts'
import type { Recycler$LocalPool } from '../../../io/netty/util/Recycler$LocalPool.d.ts'
import type { FastThreadLocal } from '../../../io/netty/util/concurrent/FastThreadLocal.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class Recycler<T extends unknown> extends Object {
    static unpinOwner(paramarg0: Recycler<Object>): void;
    constructor()
    constructor(arg0: Thread, arg1: boolean)
    constructor(arg0: boolean)
    constructor(arg0: number)
    constructor(arg0: number, arg1: boolean)
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: Thread, arg3: boolean)
    constructor(arg0: number, arg1: number, arg2: boolean)
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: Thread, arg4: boolean)
    constructor(arg0: number, arg1: number, arg2: number, arg3: boolean)
    private constructor(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: Thread, arg5: boolean)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number)
    // private localPool: Recycler$LocalPool<Object, T>;
    // private threadLocalPool: FastThreadLocal<Recycler$LocalPool<Object, T>>;
    get(): T;
    newObject(arg0: Recycler$Handle<T>): T;
    recycle(arg0: T, arg1: Recycler$Handle<T>): boolean;
    threadLocalSize(): number;
}