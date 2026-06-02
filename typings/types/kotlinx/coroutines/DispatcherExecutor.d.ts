import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { Executor } from '../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CoroutineDispatcher } from '../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
export class DispatcherExecutor extends Object implements Executor {
    constructor(dispatcher: CoroutineDispatcher)
    dispatcher: CoroutineDispatcher;
    execute(block: () => void): void;
    toString(): string;
}