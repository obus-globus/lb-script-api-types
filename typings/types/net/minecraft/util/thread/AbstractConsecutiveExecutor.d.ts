import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { AtomicReference } from '../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MetricSampler } from '../../../../net/minecraft/util/profiling/metrics/MetricSampler.d.ts'
import type { ProfilerMeasured } from '../../../../net/minecraft/util/profiling/metrics/ProfilerMeasured.d.ts'
import type { AbstractConsecutiveExecutor$Status } from '../../../../net/minecraft/util/thread/AbstractConsecutiveExecutor$Status.d.ts'
import type { StrictQueue } from '../../../../net/minecraft/util/thread/StrictQueue.d.ts'
import type { TaskScheduler } from '../../../../net/minecraft/util/thread/TaskScheduler.d.ts'
export abstract class AbstractConsecutiveExecutor<T extends Runnable> extends Object implements Runnable, ProfilerMeasured, TaskScheduler<T> {
    static wrapExecutor(paramname: string, paramexecutor: Executor): TaskScheduler<() => void>;
    constructor(queue: StrictQueue<T>, executor: Executor, name: string)
    // private executor: Executor;
    // private name: string;
    // private queue: StrictQueue<T>;
    // private status: AtomicReference<AbstractConsecutiveExecutor$Status>;
    // private canBeScheduled(): boolean;
    close(): void;
    hasWork(): boolean;
    // private isClosed(): boolean;
    // private isRunning(): boolean;
    name(): string;
    // private pollTask(): boolean;
    profiledMetrics(): MetricSampler[];
    // private registerForExecution(): void;
    run(): void;
    runAll(): void;
    schedule(task: T): void;
    scheduleWithResult<Source extends Object | number | string | boolean>(futureConsumer: (param0: CompletableFuture<Source>) => void): CompletableFuture<Source>;
    // private setRunning(): boolean;
    // private setSleeping(): void;
    size(): number;
    toString(): string;
}