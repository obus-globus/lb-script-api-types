import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { Executor } from '../../java/util/concurrent/Executor.d.ts'
import type { RejectedExecutionException } from '../../java/util/concurrent/RejectedExecutionException.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { ContinuationInterceptor$Key } from '../../kotlin/coroutines/ContinuationInterceptor$Key.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CancellableContinuation } from '../../kotlinx/coroutines/CancellableContinuation.d.ts'
import type { CoroutineDispatcher$Key } from '../../kotlinx/coroutines/CoroutineDispatcher$Key.d.ts'
import type { Delay } from '../../kotlinx/coroutines/Delay.d.ts'
import type { DisposableHandle } from '../../kotlinx/coroutines/DisposableHandle.d.ts'
import type { ExecutorCoroutineDispatcher } from '../../kotlinx/coroutines/ExecutorCoroutineDispatcher.d.ts'
import type { ExecutorCoroutineDispatcher$Key } from '../../kotlinx/coroutines/ExecutorCoroutineDispatcher$Key.d.ts'
export class ExecutorCoroutineDispatcherImpl extends ExecutorCoroutineDispatcher implements Delay {
    static Key: ContinuationInterceptor$Key;
    static Key: CoroutineDispatcher$Key;
    static Key: ExecutorCoroutineDispatcher$Key;
    constructor(executor: Executor)
    readonly executor: Executor;
    // private cancelJobOnRejection(context: CoroutineContext, exception: RejectedExecutionException): void;
    close(): void;
    delay(time: number): void;
    dispatch(context: CoroutineContext, block: () => void): void;
    equals(other: Object | null): boolean;
    hashCode(): number;
    invokeOnTimeout(timeMillis: number, block: () => void, context: CoroutineContext): DisposableHandle;
    scheduleResumeAfterDelay(timeMillis: number, continuation: CancellableContinuation<void>): void;
    toString(): string;
}