import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { ThreadFactory } from '../../../../java/util/concurrent/ThreadFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UnorderedThreadPoolEventExecutor$AccountingThreadFactory extends Object implements ThreadFactory {
    private constructor(arg0: ThreadFactory, arg1: Thread[])
    // private delegate: ThreadFactory;
    // private threads: Thread[];
    newThread(arg0: () => void): Thread;
}