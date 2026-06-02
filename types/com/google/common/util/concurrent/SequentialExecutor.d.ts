import type { SequentialExecutor$QueueWorker } from '../../../../../com/google/common/util/concurrent/SequentialExecutor$QueueWorker.d.ts'
import type { SequentialExecutor$WorkerRunningState } from '../../../../../com/google/common/util/concurrent/SequentialExecutor$WorkerRunningState.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SequentialExecutor extends Object implements Executor {
    constructor(executor: Executor)
    // private executor: Executor;
    // private queue: () => void[];
    // private worker: SequentialExecutor$QueueWorker;
    // private workerRunCount: number;
    // private workerRunningState: SequentialExecutor$WorkerRunningState;
    execute(task: () => void): void;
    toString(): string;
}