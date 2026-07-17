import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { BooleanSupplier } from '../../../../java/util/function/BooleanSupplier.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { CrashReport } from '../../../../net/minecraft/CrashReport.d.ts'
import type { MetricSampler } from '../../../../net/minecraft/util/profiling/metrics/MetricSampler.d.ts'
import type { ProfilerMeasured } from '../../../../net/minecraft/util/profiling/metrics/ProfilerMeasured.d.ts'
import type { TaskScheduler } from '../../../../net/minecraft/util/thread/TaskScheduler.d.ts'
export abstract class BlockableEventLoop<R extends Runnable> extends Object implements Executor, ProfilerMeasured, TaskScheduler<R> {
    static BLOCK_TIME_NANOS: number;
    static isNonRecoverable(paramt: Throwable): boolean;
    static relayDelayCrash(paramcrashReport: CrashReport): void;
    constructor(name: string, propagatesCrashes: boolean)
    // private blockingCount: number;
    // private name: string;
    // private pendingRunnables: R[];
    // private propagatesCrashes: boolean;
    close(): void;
    delayCrash(crashReport: CrashReport): void;
    doRunTask(task: R): void;
    dropAllTasks(): void;
    execute(command: () => void): void;
    executeBlocking(runnable: () => void): void;
    executeIfPossible(command: () => void): void;
    getPendingTasksCount(): number;
    getRunningThread(): Thread;
    isSameThread(): boolean;
    managedBlock(condition: () => boolean): void;
    name(): string;
    pollTask(): boolean;
    profiledMetrics(): MetricSampler[];
    runAllTasks(): void;
    schedule(r: R): void;
    scheduleExecutables(): boolean;
    scheduleWithResult<Source extends unknown>(futureConsumer: (param0: CompletableFuture<Source>) => void): CompletableFuture<Source>;
    shouldRun(task: R): boolean;
    shouldRunAllTasks(): boolean;
    submit(runnable: () => void): CompletableFuture<void>;
    submit<V extends unknown>(supplier: () => V): CompletableFuture<V>;
    // private submitAsync(runnable: () => void): CompletableFuture<void>;
    // private throwDelayedException(): void;
    waitForTasks(): void;
}