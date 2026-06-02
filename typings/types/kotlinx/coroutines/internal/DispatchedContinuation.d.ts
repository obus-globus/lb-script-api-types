import type { StackTraceElement } from '../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Result } from '../../../kotlin/Result.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineStackFrame } from '../../../kotlin/coroutines/jvm/internal/CoroutineStackFrame.d.ts'
import type { CancellableContinuation } from '../../../kotlinx/coroutines/CancellableContinuation.d.ts'
import type { CancellableContinuationImpl } from '../../../kotlinx/coroutines/CancellableContinuationImpl.d.ts'
import type { CoroutineDispatcher } from '../../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
import type { DispatchedTask } from '../../../kotlinx/coroutines/DispatchedTask.d.ts'
export class DispatchedContinuation<T extends Object | number | string | boolean> extends DispatchedTask<T> implements Continuation<T>, CoroutineStackFrame {
    constructor(dispatcher: CoroutineDispatcher, continuation: Continuation<T>)
    awaitReusability(): void;
    claimReusableCancellableContinuation(): CancellableContinuationImpl<T> | null;
    dispatchYield(context: CoroutineContext, value: T): void;
    getStackTraceElement(): StackTraceElement | null;
    isReusable(): boolean;
    postponeCancellation(cause: Throwable): boolean;
    release(): void;
    resumeCancellableWith(result: Result<T>): void;
    resumeCancelled(state: Object | null): boolean;
    resumeUndispatchedWith(result: Result<T>): void;
    resumeWith(result: Result<T>): void;
    takeState(): Object | null;
    toString(): string;
    tryReleaseClaimedContinuation(continuation: CancellableContinuation<Object>): Throwable | null;
}