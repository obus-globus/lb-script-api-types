import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Thread$UncaughtExceptionHandler } from '../../../java/lang/Thread$UncaughtExceptionHandler.d.ts'
import type { AbstractExecutorService } from '../../../java/util/concurrent/AbstractExecutorService.d.ts'
import type { Callable } from '../../../java/util/concurrent/Callable.d.ts'
import type { CountDownLatch } from '../../../java/util/concurrent/CountDownLatch.d.ts'
import type { DelayScheduler } from '../../../java/util/concurrent/DelayScheduler.d.ts'
import type { DelayScheduler$ScheduledForkJoinTask } from '../../../java/util/concurrent/DelayScheduler$ScheduledForkJoinTask.d.ts'
import type { ForkJoinPool$ForkJoinWorkerThreadFactory } from '../../../java/util/concurrent/ForkJoinPool$ForkJoinWorkerThreadFactory.d.ts'
import type { ForkJoinPool$ManagedBlocker } from '../../../java/util/concurrent/ForkJoinPool$ManagedBlocker.d.ts'
import type { ForkJoinPool$WorkQueue } from '../../../java/util/concurrent/ForkJoinPool$WorkQueue.d.ts'
import type { ForkJoinTask } from '../../../java/util/concurrent/ForkJoinTask.d.ts'
import type { ForkJoinWorkerThread } from '../../../java/util/concurrent/ForkJoinWorkerThread.d.ts'
import type { Future } from '../../../java/util/concurrent/Future.d.ts'
import type { RunnableFuture } from '../../../java/util/concurrent/RunnableFuture.d.ts'
import type { ScheduledExecutorService } from '../../../java/util/concurrent/ScheduledExecutorService.d.ts'
import type { ScheduledFuture } from '../../../java/util/concurrent/ScheduledFuture.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { SharedThreadContainer } from '../../../jdk/internal/vm/SharedThreadContainer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class ForkJoinPool extends AbstractExecutorService implements ScheduledExecutorService {
    static defaultForkJoinWorkerThreadFactory: ForkJoinPool$ForkJoinWorkerThreadFactory;
    static commonPool(): ForkJoinPool;
    static getCommonPoolParallelism(): number;
    static managedBlock(paramarg0: ForkJoinPool$ManagedBlocker): void;
    constructor()
    private constructor(arg0: number)
    constructor(arg0: number)
    constructor(arg0: number, arg1: ForkJoinPool$ForkJoinWorkerThreadFactory, arg2: (param0: Thread, param1: Throwable) => void, arg3: boolean)
    constructor(arg0: number, arg1: ForkJoinPool$ForkJoinWorkerThreadFactory, arg2: (param0: Thread, param1: Throwable) => void, arg3: boolean, arg4: number, arg5: number, arg6: number, arg7: (param0: ForkJoinPool) => kotlin.Boolean, arg8: number, arg9: TimeUnit)
    // private config: number;
    // private container: SharedThreadContainer;
    // private ctl: number;
    // private delayScheduler: DelayScheduler;
    readonly factory: ForkJoinPool$ForkJoinWorkerThreadFactory;
    // private keepAlive: number;
    parallelism: number;
    // private poolName: string;
    // private queues: ForkJoinPool$WorkQueue[];
    // private runState: number;
    // private saturate: (param0: ForkJoinPool) => kotlin.Boolean;
    stealCount: number;
    // private termination: CountDownLatch;
    // private threadIds: number;
    // private ueh: (param0: Thread, param1: Throwable) => void;
    // private workerNamePrefix: string;
    awaitQuiescence(arg0: number, arg1: TimeUnit): boolean;
    awaitTermination(arg0: number, arg1: TimeUnit): boolean;
    // private awaitWork(arg0: ForkJoinPool$WorkQueue, arg1: number): number;
    beginCompensatedBlock(): number;
    cancelDelayedTasksOnShutdown(): void;
    // private casRunState(arg0: number, arg1: number): boolean;
    // private cleanQueues(): boolean;
    close(): void;
    // private cmpExTerminationSignal(arg0: CountDownLatch): CountDownLatch;
    // private compareAndExchangeCtl(arg0: number, arg1: number): number;
    // private compareAndSetCtl(arg0: number, arg1: number): boolean;
    // private compensatedBlock(arg0: ForkJoinPool$ManagedBlocker): void;
    // private createWorker(): boolean;
    // private deactivate(arg0: ForkJoinPool$WorkQueue, arg1: number): number;
    deregisterWorker(arg0: ForkJoinWorkerThread, arg1: Throwable): void;
    drainTasksTo(arg0: E[]): number;
    endCompensatedBlock(arg0: number): void;
    execute(arg0: () => void): void;
    execute(arg0: ForkJoinTask<Object>): void;
    executeEnabledScheduledTask(arg0: DelayScheduler$ScheduledForkJoinTask<Object>): void;
    // private externalHelpQuiesce(arg0: number, arg1: boolean): number;
    externalSubmissionQueue(arg0: boolean): ForkJoinPool$WorkQueue;
    externalSubmit(arg0: ForkJoinTask<T>): ForkJoinTask<T>;
    getActiveThreadCount(): number;
    // private getAndAddCtl(arg0: number): number;
    // private getAndBitwiseOrRunState(arg0: number): number;
    // private getAndSetParallelism(arg0: number): number;
    getAsyncMode(): boolean;
    getDelayedTaskCount(): number;
    getFactory(): ForkJoinPool$ForkJoinWorkerThreadFactory;
    getParallelism(): number;
    // private getParallelismOpaque(): number;
    getPoolSize(): number;
    getQueuedSubmissionCount(): number;
    getQueuedTaskCount(): number;
    getRunningThreadCount(): number;
    getStealCount(): number;
    getUncaughtExceptionHandler(): (param0: Thread, param1: Throwable) => void;
    hasQueuedSubmissions(): boolean;
    helpComplete(arg0: ForkJoinTask<Object>, arg1: ForkJoinPool$WorkQueue, arg2: boolean): number;
    helpJoin(arg0: ForkJoinTask<Object>, arg1: ForkJoinPool$WorkQueue, arg2: boolean): number;
    // private helpQuiesce(arg0: ForkJoinPool$WorkQueue, arg1: number, arg2: boolean): number;
    // private incrementThreadIds(): number;
    // private interruptAll(): void;
    invoke<T extends Object | number | string | boolean>(arg0: ForkJoinTask<T>): T;
    invokeAll(arg0: E[]): Future<T>[];
    // private invokeAll(arg0: E[], arg1: number): Future<T>[];
    invokeAll(arg0: E[], arg1: number, arg2: TimeUnit): Future<T>[];
    invokeAllUninterruptibly(arg0: E[]): Future<T>[];
    invokeAny<T extends Object | number | string | boolean>(arg0: E[]): T;
    invokeAny<T extends Object | number | string | boolean>(arg0: E[], arg1: number, arg2: TimeUnit): T;
    isQuiescent(): boolean;
    isShutdown(): boolean;
    isTerminated(): boolean;
    isTerminating(): boolean;
    lazySubmit(arg0: ForkJoinTask<T>): ForkJoinTask<T>;
    // private lockRunState(): number;
    newTaskFor<T extends Object | number | string | boolean>(arg0: () => void, arg1: T): RunnableFuture<T>;
    newTaskFor(arg0: () => T): RunnableFuture<T>;
    nextTaskFor(arg0: ForkJoinPool$WorkQueue): ForkJoinTask<Object>;
    nextWorkerThreadName(): string;
    // private pollScan(arg0: boolean): ForkJoinTask<Object>;
    pollSubmission(): ForkJoinTask<Object>;
    // private poolSubmit(arg0: boolean, arg1: ForkJoinTask<T>): ForkJoinTask<T>;
    // private quiescent(): number;
    registerWorker(arg0: ForkJoinPool$WorkQueue): void;
    // private releaseWaiters(): void;
    runWorker(arg0: ForkJoinPool$WorkQueue): void;
    schedule(arg0: () => void, arg1: number, arg2: TimeUnit): ScheduledFuture<Object>;
    schedule(arg0: () => V, arg1: number, arg2: TimeUnit): ScheduledFuture<V>;
    scheduleAtFixedRate(arg0: () => void, arg1: number, arg2: number, arg3: TimeUnit): ScheduledFuture<Object>;
    scheduleDelayedTask(arg0: DelayScheduler$ScheduledForkJoinTask<T>): DelayScheduler$ScheduledForkJoinTask<T>;
    scheduleWithFixedDelay(arg0: () => void, arg1: number, arg2: number, arg3: TimeUnit): ScheduledFuture<Object>;
    setParallelism(arg0: number): number;
    shutdown(): void;
    shutdownNow(): () => void[];
    shutdownStatus(arg0: DelayScheduler): number;
    signalWork(): void;
    // private spinLockRunState(): number;
    // private startDelayScheduler(): DelayScheduler;
    // private submissionQueue(arg0: number, arg1: boolean): ForkJoinPool$WorkQueue;
    submit(arg0: () => void): ForkJoinTask<Object>;
    submit<T extends Object | number | string | boolean>(arg0: () => void, arg1: T): ForkJoinTask<T>;
    submit(arg0: () => T): ForkJoinTask<T>;
    submit(arg0: ForkJoinTask<T>): ForkJoinTask<T>;
    submitWithTimeout(arg0: () => V, arg1: number, arg2: TimeUnit, arg3: (param0: ForkJoinTask<V>) => void): ForkJoinTask<V>;
    // private terminationSignal(): CountDownLatch;
    toString(): string;
    // private tryCompensate(arg0: number): number;
    tryStopIfShutdown(arg0: DelayScheduler): boolean;
    // private tryTerminate(arg0: boolean, arg1: boolean): number;
    // private tryTrim(arg0: ForkJoinPool$WorkQueue, arg1: number, arg2: number): number;
    uncompensate(): void;
    // private unlockRunState(): void;
}