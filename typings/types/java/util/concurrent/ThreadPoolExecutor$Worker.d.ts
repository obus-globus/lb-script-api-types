import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { ThreadPoolExecutor } from '../../../java/util/concurrent/ThreadPoolExecutor.d.ts'
import type { AbstractQueuedSynchronizer } from '../../../java/util/concurrent/locks/AbstractQueuedSynchronizer.d.ts'
export class ThreadPoolExecutor$Worker extends AbstractQueuedSynchronizer implements Runnable {
    constructor(null_: ThreadPoolExecutor, arg1: () => void)
    // private completedTasks: number;
    // private firstTask: () => void;
    // private thread: Thread;
    interruptIfStarted(): void;
    isHeldExclusively(): boolean;
    isLocked(): boolean;
    lock(): void;
    run(): void;
    tryAcquire(arg0: number): boolean;
    tryLock(): boolean;
    tryRelease(arg0: number): boolean;
    unlock(): void;
}