import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { ContinuationInterceptor$Key } from '../../../kotlin/coroutines/ContinuationInterceptor$Key.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineDispatcher } from '../../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
import type { ExecutorCoroutineDispatcher } from '../../../kotlinx/coroutines/ExecutorCoroutineDispatcher.d.ts'
export class DefaultIoScheduler extends ExecutorCoroutineDispatcher implements Executor {
    static INSTANCE: DefaultIoScheduler;
    static Key: ContinuationInterceptor$Key;
    // private default: CoroutineDispatcher;
    readonly executor: Executor;
    close(): void;
    dispatch(context: CoroutineContext, block: () => void): void;
    dispatchYield(context: CoroutineContext, block: () => void): void;
    execute(command: () => void): void;
    limitedParallelism(parallelism: number): CoroutineDispatcher;
    limitedParallelism(parallelism: number, name: string | null): CoroutineDispatcher;
    toString(): string;
}