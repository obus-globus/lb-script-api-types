import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { AbstractExecutorService } from '../../../java/util/concurrent/AbstractExecutorService.d.ts'
import type { RejectedExecutionHandler } from '../../../java/util/concurrent/RejectedExecutionHandler.d.ts'
import type { ThreadFactory } from '../../../java/util/concurrent/ThreadFactory.d.ts'
import type { ThreadPoolExecutor$Worker } from '../../../java/util/concurrent/ThreadPoolExecutor$Worker.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { AtomicInteger } from '../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Condition } from '../../../java/util/concurrent/locks/Condition.d.ts'
import type { ReentrantLock } from '../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { SharedThreadContainer } from '../../../jdk/internal/vm/SharedThreadContainer.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class ThreadPoolExecutor extends AbstractExecutorService {
    constructor(arg0: number, arg1: number, arg2: number, arg3: TimeUnit, arg4: () => void[])
    constructor(arg0: number, arg1: number, arg2: number, arg3: TimeUnit, arg4: () => void[], arg5: RejectedExecutionHandler)
    constructor(arg0: number, arg1: number, arg2: number, arg3: TimeUnit, arg4: () => void[], arg5: ThreadFactory)
    constructor(arg0: number, arg1: number, arg2: number, arg3: TimeUnit, arg4: () => void[], arg5: ThreadFactory, arg6: RejectedExecutionHandler)
    // private allowCoreThreadTimeOut: boolean;
    readonly completedTaskCount: number;
    // private container: SharedThreadContainer;
    readonly corePoolSize: number;
    // private ctl: AtomicInteger;
    // private handler: RejectedExecutionHandler;
    // private keepAliveTime: number;
    readonly largestPoolSize: number;
    // private mainLock: ReentrantLock;
    readonly maximumPoolSize: number;
    // private termination: Condition;
    readonly threadFactory: ThreadFactory;
    // private workQueue: () => void[];
    // private workers: ThreadPoolExecutor$Worker[];
    // private addWorker(arg0: () => void, arg1: boolean): boolean;
    // private addWorkerFailed(arg0: ThreadPoolExecutor$Worker): void;
    // private advanceRunState(arg0: number): void;
    afterExecute(arg0: () => void, arg1: Throwable): void;
    allowCoreThreadTimeOut(arg0: boolean): void;
    allowsCoreThreadTimeOut(): boolean;
    awaitTermination(arg0: number, arg1: TimeUnit): boolean;
    beforeExecute(arg0: Thread, arg1: () => void): void;
    // private compareAndDecrementWorkerCount(arg0: number): boolean;
    // private compareAndIncrementWorkerCount(arg0: number): boolean;
    // private decrementWorkerCount(): void;
    // private drainQueue(): () => void[];
    ensurePrestart(): void;
    execute(arg0: () => void): void;
    finalize(): void;
    getActiveCount(): number;
    getCompletedTaskCount(): number;
    getCorePoolSize(): number;
    getKeepAliveTime(arg0: TimeUnit): number;
    getLargestPoolSize(): number;
    getMaximumPoolSize(): number;
    getPoolSize(): number;
    getQueue(): () => void[];
    getRejectedExecutionHandler(): RejectedExecutionHandler;
    // private getTask(): () => void;
    getTaskCount(): number;
    getThreadFactory(): ThreadFactory;
    // private interruptIdleWorkers(): void;
    // private interruptIdleWorkers(arg0: boolean): void;
    // private interruptWorkers(): void;
    isShutdown(): boolean;
    isStopped(): boolean;
    isTerminated(): boolean;
    isTerminating(): boolean;
    onShutdown(): void;
    prestartAllCoreThreads(): number;
    prestartCoreThread(): boolean;
    // private processWorkerExit(arg0: ThreadPoolExecutor$Worker, arg1: boolean): void;
    purge(): void;
    reject(arg0: () => void): void;
    remove(arg0: () => void): boolean;
    runWorker(arg0: ThreadPoolExecutor$Worker): void;
    setCorePoolSize(arg0: number): void;
    setKeepAliveTime(arg0: number, arg1: TimeUnit): void;
    setMaximumPoolSize(arg0: number): void;
    setRejectedExecutionHandler(arg0: RejectedExecutionHandler): void;
    setThreadFactory(arg0: ThreadFactory): void;
    shutdown(): void;
    shutdownNow(): () => void[];
    terminated(): void;
    toString(): string;
    tryTerminate(): void;
}