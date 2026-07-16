import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { ContinuationInterceptor$Key } from '../../../kotlin/coroutines/ContinuationInterceptor$Key.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { AtomicInt } from '../../../kotlinx/atomicfu/AtomicInt.d.ts'
import type { CancellableContinuation } from '../../../kotlinx/coroutines/CancellableContinuation.d.ts'
import type { CoroutineDispatcher } from '../../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
import type { Delay } from '../../../kotlinx/coroutines/Delay.d.ts'
import type { DisposableHandle } from '../../../kotlinx/coroutines/DisposableHandle.d.ts'
import type { LimitedDispatcher$Worker } from '../../../kotlinx/coroutines/internal/LimitedDispatcher$Worker.d.ts'
import type { LockFreeTaskQueue } from '../../../kotlinx/coroutines/internal/LockFreeTaskQueue.d.ts'
export class LimitedDispatcher extends CoroutineDispatcher implements Delay {
    static Key: ContinuationInterceptor$Key;
    static delay$suspendImpl(paramarg0: Delay, paramarg1: number, paramarg2: Continuation<Object>): Object;
    constructor(dispatcher: CoroutineDispatcher, parallelism: number, name: string | null)
    delay(time: number): void;
    dispatch(context: CoroutineContext, block: () => void): void;
    // private dispatchInternal(block: () => void, startWorker: (param0: LimitedDispatcher$Worker) => void): void;
    dispatchYield(context: CoroutineContext, block: () => void): void;
    invokeOnTimeout(timeMillis: number, block: () => void, context: CoroutineContext): DisposableHandle;
    limitedParallelism(parallelism: number): CoroutineDispatcher;
    limitedParallelism(parallelism: number, name: string | null): CoroutineDispatcher;
    // private obtainTaskOrDeallocateWorker(): (() => void) | null;
    scheduleResumeAfterDelay(timeMillis: number, continuation: CancellableContinuation<void>): void;
    toString(): string;
    // private tryAllocateWorker(): boolean;
}