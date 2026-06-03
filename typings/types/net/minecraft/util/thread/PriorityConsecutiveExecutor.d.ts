import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { AbstractConsecutiveExecutor } from '../../../../net/minecraft/util/thread/AbstractConsecutiveExecutor.d.ts'
import type { StrictQueue$RunnableWithPriority } from '../../../../net/minecraft/util/thread/StrictQueue$RunnableWithPriority.d.ts'
export class PriorityConsecutiveExecutor extends AbstractConsecutiveExecutor<StrictQueue$RunnableWithPriority> {
    constructor(priorityCount: number, executor: Executor, name: string)
    scheduleWithResult(futureConsumer: (param0: CompletableFuture<Source>) => void): CompletableFuture<Source>;
    scheduleWithResult(priority: number, futureConsumer: (param0: CompletableFuture<Source>) => void): CompletableFuture<Source>;
    wrapRunnable(runnable: () => void): StrictQueue$RunnableWithPriority;
}