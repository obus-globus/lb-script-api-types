import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { ThreadFactory } from '../../../../java/util/concurrent/ThreadFactory.d.ts'
import type { AtomicInteger } from '../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NamedThreadFactory extends Object implements ThreadFactory {
    constructor(arg0: string)
    // private nameFormat: string;
    // private threadNumber: AtomicInteger;
    newThread(arg0: () => void): Thread;
}