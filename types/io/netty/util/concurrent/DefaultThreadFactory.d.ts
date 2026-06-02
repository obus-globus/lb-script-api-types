import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { ThreadGroup } from '../../../../java/lang/ThreadGroup.d.ts'
import type { ThreadFactory } from '../../../../java/util/concurrent/ThreadFactory.d.ts'
import type { AtomicInteger } from '../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultThreadFactory extends Object implements ThreadFactory {
    static toPoolName(paramarg0: Class<Object>): string;
    constructor(arg0: Class<Object>)
    constructor(arg0: Class<Object>, arg1: boolean)
    constructor(arg0: Class<Object>, arg1: boolean, arg2: number)
    constructor(arg0: Class<Object>, arg1: number)
    constructor(arg0: string)
    constructor(arg0: string, arg1: boolean)
    constructor(arg0: string, arg1: boolean, arg2: number)
    constructor(arg0: string, arg1: boolean, arg2: number, arg3: ThreadGroup)
    constructor(arg0: string, arg1: number)
    // private daemon: boolean;
    // private nextId: AtomicInteger;
    // private prefix: string;
    // private priority: number;
    // private threadGroup: ThreadGroup;
    newThread(arg0: () => void): Thread;
    newThread(arg0: () => void, arg1: string): Thread;
}