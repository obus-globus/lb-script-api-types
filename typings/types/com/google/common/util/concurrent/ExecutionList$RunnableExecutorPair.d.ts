import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ExecutionList$RunnableExecutorPair extends Object {
    constructor(runnable: () => void, executor: Executor, next: ExecutionList$RunnableExecutorPair)
    // private executor: Executor;
    // private next: ExecutionList$RunnableExecutorPair;
    // private runnable: () => void;
}