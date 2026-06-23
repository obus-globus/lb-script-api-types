import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Callable } from '../../../java/util/concurrent/Callable.d.ts'
import type { Future } from '../../../java/util/concurrent/Future.d.ts'
import type { RejectedExecutionHandler } from '../../../java/util/concurrent/RejectedExecutionHandler.d.ts'
import type { RunnableScheduledFuture } from '../../../java/util/concurrent/RunnableScheduledFuture.d.ts'
import type { ScheduledExecutorService } from '../../../java/util/concurrent/ScheduledExecutorService.d.ts'
import type { ScheduledFuture } from '../../../java/util/concurrent/ScheduledFuture.d.ts'
import type { ThreadFactory } from '../../../java/util/concurrent/ThreadFactory.d.ts'
import type { ThreadPoolExecutor } from '../../../java/util/concurrent/ThreadPoolExecutor.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ScheduledThreadPoolExecutor extends ThreadPoolExecutor implements ScheduledExecutorService {
    constructor(arg0: number)
    constructor(arg0: number, arg1: RejectedExecutionHandler)
    constructor(arg0: number, arg1: ThreadFactory)
    constructor(arg0: number, arg1: ThreadFactory, arg2: RejectedExecutionHandler)
    // private continueExistingPeriodicTasksAfterShutdown: boolean;
    // private executeExistingDelayedTasksAfterShutdown: boolean;
    // private removeOnCancel: boolean;
    canRunInCurrentRunState(arg0: RunnableScheduledFuture<Object>): boolean;
    decorateTask<V extends unknown>(arg0: () => void, arg1: RunnableScheduledFuture<V>): RunnableScheduledFuture<V>;
    decorateTask<V extends unknown>(arg0: () => V, arg1: RunnableScheduledFuture<V>): RunnableScheduledFuture<V>;
    // private delayedExecute(arg0: RunnableScheduledFuture<Object>): void;
    execute(arg0: () => void): void;
    getContinueExistingPeriodicTasksAfterShutdownPolicy(): boolean;
    getExecuteExistingDelayedTasksAfterShutdownPolicy(): boolean;
    getQueue(): () => void[];
    getRemoveOnCancelPolicy(): boolean;
    onShutdown(): void;
    reExecutePeriodic(arg0: RunnableScheduledFuture<Object>): void;
    schedule(arg0: () => void, arg1: number, arg2: TimeUnit): ScheduledFuture<Object>;
    schedule<V extends unknown>(arg0: () => V, arg1: number, arg2: TimeUnit): ScheduledFuture<V>;
    scheduleAtFixedRate(arg0: () => void, arg1: number, arg2: number, arg3: TimeUnit): ScheduledFuture<Object>;
    scheduleWithFixedDelay(arg0: () => void, arg1: number, arg2: number, arg3: TimeUnit): ScheduledFuture<Object>;
    setContinueExistingPeriodicTasksAfterShutdownPolicy(arg0: boolean): void;
    setExecuteExistingDelayedTasksAfterShutdownPolicy(arg0: boolean): void;
    setRemoveOnCancelPolicy(arg0: boolean): void;
    shutdown(): void;
    shutdownNow(): () => void[];
    submit(arg0: () => void): Future<Object>;
    submit<T extends unknown>(arg0: () => void, arg1: T): Future<T>;
    submit<T extends unknown>(arg0: () => T): Future<T>;
    triggerTime(arg0: number): number;
    // private triggerTime(arg0: number, arg1: TimeUnit): number;
}