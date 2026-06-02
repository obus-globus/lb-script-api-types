import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { AbstractConsecutiveExecutor } from '../../../../net/minecraft/util/thread/AbstractConsecutiveExecutor.d.ts'
export class ConsecutiveExecutor extends AbstractConsecutiveExecutor<() => void> {
    constructor(dispatcher: Executor, name: string)
    wrapRunnable(runnable: () => void): () => void;
}