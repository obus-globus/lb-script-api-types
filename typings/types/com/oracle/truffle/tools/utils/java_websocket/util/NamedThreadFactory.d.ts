import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../../../../java/lang/Thread.d.ts'
import type { ThreadFactory } from '../../../../../../../java/util/concurrent/ThreadFactory.d.ts'
import type { AtomicInteger } from '../../../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class NamedThreadFactory extends Object implements ThreadFactory {
    constructor(arg0: string)
    constructor(arg0: string, arg1: boolean)
    // private daemon: boolean;
    // private defaultThreadFactory: ThreadFactory;
    // private threadNumber: AtomicInteger;
    // private threadPrefix: string;
    newThread(arg0: () => void): Thread;
}