import type { Object } from '../../java/lang/Object.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CancelHandler } from '../../kotlinx/coroutines/CancelHandler.d.ts'
import type { CancellableContinuation } from '../../kotlinx/coroutines/CancellableContinuation.d.ts'
import type { CancellableContinuationImpl } from '../../kotlinx/coroutines/CancellableContinuationImpl.d.ts'
import type { DisposableHandle } from '../../kotlinx/coroutines/DisposableHandle.d.ts'
export class CancellableContinuationKt extends Object {
    static disposeOnCancellation(self: CancellableContinuation<Object>, handle: DisposableHandle): void;
    static getOrCreateCancellableContinuation<T extends unknown>(delegate: Continuation<T>): CancellableContinuationImpl<T>;
    static invokeOnCancellation<T extends unknown>(self: CancellableContinuation<T>, handler: CancelHandler): void;
    static suspendCancellableCoroutine<T extends unknown>(block: (param0: CancellableContinuation<T>) => void): T;
    static suspendCancellableCoroutineReusable<T extends unknown>(block: (param0: CancellableContinuationImpl<T>) => void): T;
}