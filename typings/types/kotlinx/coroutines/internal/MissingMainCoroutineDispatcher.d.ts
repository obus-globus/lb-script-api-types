import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { ContinuationInterceptor$Key } from '../../../kotlin/coroutines/ContinuationInterceptor$Key.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CancellableContinuation } from '../../../kotlinx/coroutines/CancellableContinuation.d.ts'
import type { CoroutineDispatcher } from '../../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
import type { CoroutineDispatcher$Key } from '../../../kotlinx/coroutines/CoroutineDispatcher$Key.d.ts'
import type { Delay } from '../../../kotlinx/coroutines/Delay.d.ts'
import type { DisposableHandle } from '../../../kotlinx/coroutines/DisposableHandle.d.ts'
import type { MainCoroutineDispatcher } from '../../../kotlinx/coroutines/MainCoroutineDispatcher.d.ts'
export class MissingMainCoroutineDispatcher extends MainCoroutineDispatcher implements Delay {
    static Key: ContinuationInterceptor$Key;
    static Key: CoroutineDispatcher$Key;
    constructor(cause: Throwable | null, errorHint: string | null)
    // private cause: Throwable | null;
    // private errorHint: string | null;
    readonly immediate: MainCoroutineDispatcher;
    delay(time: number): void;
    dispatch(context: CoroutineContext, block: () => void): void;
    invokeOnTimeout(timeMillis: number, block: () => void, context: CoroutineContext): DisposableHandle;
    isDispatchNeeded(context: CoroutineContext): boolean;
    limitedParallelism(parallelism: number): CoroutineDispatcher;
    limitedParallelism(parallelism: number, name: string | null): CoroutineDispatcher;
    // private missing(): void;
    scheduleResumeAfterDelay(timeMillis: number, continuation: CancellableContinuation<void>): void;
    toString(): string;
}