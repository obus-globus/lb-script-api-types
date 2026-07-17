import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { ThreadFactory } from '../../../../java/util/concurrent/ThreadFactory.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JoinableThreadPoolExecutor$ThreadCollectingFactory extends Object implements ThreadFactory {
    constructor(delegate: ThreadFactory)
    // private delegate: ThreadFactory;
    // private threads: Thread[];
    interrupt(): void;
    join(timeout: number, unit: TimeUnit): boolean;
    newThread(r: () => void): Thread;
}