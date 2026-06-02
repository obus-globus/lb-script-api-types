import type { Object } from '../../java/lang/Object.d.ts'
import type { Function1 } from '../../kotlin/jvm/functions/Function1.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CancelHandler } from '../../kotlinx/coroutines/CancelHandler.d.ts'
import type { CancellableContinuation } from '../../kotlinx/coroutines/CancellableContinuation.d.ts'
import type { CancellableContinuationImpl } from '../../kotlinx/coroutines/CancellableContinuationImpl.d.ts'
import type { DisposableHandle } from '../../kotlinx/coroutines/DisposableHandle.d.ts'
export class CancellableContinuationKt extends Object {
    static disposeOnCancellation(paramarg0: CancellableContinuation<Object>, paramarg1: DisposableHandle): void;
    static getOrCreateCancellableContinuation(paramarg0: Continuation<Object>): CancellableContinuationImpl<Object>;
    static invokeOnCancellation(paramarg0: CancellableContinuation<Object>, paramarg1: CancelHandler): void;
    static suspendCancellableCoroutine(paramarg0: Function1<Object, void>, paramarg1: Continuation<Object>): Object;
    static suspendCancellableCoroutineReusable(paramarg0: Function1<Object, void>, paramarg1: Continuation<Object>): Object;
}