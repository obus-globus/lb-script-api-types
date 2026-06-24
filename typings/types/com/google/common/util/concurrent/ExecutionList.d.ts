import type { ExecutionList$RunnableExecutorPair } from '../../../../../com/google/common/util/concurrent/ExecutionList$RunnableExecutorPair.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ExecutionList extends Object {
    constructor()
    // private executed: boolean;
    // private lock: Object;
    // private runnables: ExecutionList$RunnableExecutorPair;
    add(runnable: () => void, executor: Executor): void;
    execute(): void;
}