import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { GenericFutureListener } from '../../../../io/netty/util/concurrent/GenericFutureListener.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CancellableContinuation } from '../../../../kotlinx/coroutines/CancellableContinuation.d.ts'
export class CoroutineListener<T extends unknown, F extends Future<T>> extends Object implements GenericFutureListener<F> {
    constructor(future: F, continuation: CancellableContinuation<T>, exception: (param0: Throwable, param1: Continuation<T>) => void)
    // private continuation: CancellableContinuation<T>;
    // private exception: (param0: Throwable, param1: Continuation<T>) => void;
    // private future: F;
    invoke(p1: Throwable | null): void;
    operationComplete(future: F): void;
}