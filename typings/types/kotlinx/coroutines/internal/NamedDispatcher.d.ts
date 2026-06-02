import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { ContinuationInterceptor$Key } from '../../../kotlin/coroutines/ContinuationInterceptor$Key.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CancellableContinuation } from '../../../kotlinx/coroutines/CancellableContinuation.d.ts'
import type { CoroutineDispatcher } from '../../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
import type { CoroutineDispatcher$Key } from '../../../kotlinx/coroutines/CoroutineDispatcher$Key.d.ts'
import type { Delay } from '../../../kotlinx/coroutines/Delay.d.ts'
import type { DisposableHandle } from '../../../kotlinx/coroutines/DisposableHandle.d.ts'
export class NamedDispatcher extends CoroutineDispatcher implements Delay {
    static Key: ContinuationInterceptor$Key;
    static Key: CoroutineDispatcher$Key;
    constructor(dispatcher: CoroutineDispatcher, name: string)
    // private dispatcher: CoroutineDispatcher;
    // private name: string;
    delay(time: number): void;
    delay(time: number): void;
    dispatch(context: CoroutineContext, block: () => void): void;
    dispatchYield(context: CoroutineContext, block: () => void): void;
    invokeOnTimeout(timeMillis: number, block: () => void, context: CoroutineContext): DisposableHandle;
    invokeOnTimeout(timeMillis: number, block: () => void, context: CoroutineContext): DisposableHandle;
    isDispatchNeeded(context: CoroutineContext): boolean;
    scheduleResumeAfterDelay(timeMillis: number, continuation: CancellableContinuation<void>): void;
    toString(): string;
}