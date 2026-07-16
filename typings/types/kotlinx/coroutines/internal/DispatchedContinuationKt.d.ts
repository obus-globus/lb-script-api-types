import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Result } from '../../../kotlin/Result.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineDispatcher } from '../../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
import type { DispatchedContinuation } from '../../../kotlinx/coroutines/internal/DispatchedContinuation.d.ts'
import type { Symbol } from '../../../kotlinx/coroutines/internal/Symbol.d.ts'
export class DispatchedContinuationKt extends Object {
    static REUSABLE_CLAIMED: Symbol;
    static resumeCancellableWith<T extends unknown>(self: Continuation<T>, result: Result<T>): void;
    static resumeCancellableWithInternal<T extends unknown>(self: Continuation<T>, result: Result<T>): void;
    static safeDispatch(self: CoroutineDispatcher, context: CoroutineContext, runnable: () => void): void;
    static safeIsDispatchNeeded(self: CoroutineDispatcher, context: CoroutineContext): boolean;
    static yieldUndispatched(self: DispatchedContinuation<void>): boolean;
}