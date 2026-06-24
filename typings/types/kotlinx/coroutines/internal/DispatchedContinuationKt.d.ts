import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineDispatcher } from '../../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
import type { DispatchedContinuation } from '../../../kotlinx/coroutines/internal/DispatchedContinuation.d.ts'
import type { Symbol } from '../../../kotlinx/coroutines/internal/Symbol.d.ts'
export class DispatchedContinuationKt extends Object {
    static REUSABLE_CLAIMED: Symbol;
    static resumeCancellableWith(paramarg0: Continuation<Object>, paramarg1: Object): void;
    static resumeCancellableWithInternal(paramarg0: Continuation<Object>, paramarg1: Object): void;
    static safeDispatch(paramarg0: CoroutineDispatcher, paramarg1: CoroutineContext, paramarg2: () => void): void;
    static safeIsDispatchNeeded(paramarg0: CoroutineDispatcher, paramarg1: CoroutineContext): boolean;
    static yieldUndispatched(paramarg0: DispatchedContinuation<Object>): boolean;
}