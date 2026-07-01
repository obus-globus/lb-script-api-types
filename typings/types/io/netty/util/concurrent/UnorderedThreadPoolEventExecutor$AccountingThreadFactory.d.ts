import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { ThreadFactory } from '../../../../java/util/concurrent/ThreadFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UnorderedThreadPoolEventExecutor$AccountingThreadFactory extends Object implements ThreadFactory {
    constructor(arg0: ThreadFactory, arg1: (Object | null)[], arg2: any)
    // private delegate: ThreadFactory;
    // private threads: Thread[];
    newThread(arg0: () => void): Thread;
}