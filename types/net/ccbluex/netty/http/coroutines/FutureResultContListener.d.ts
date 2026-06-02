import type { Future } from '../../../../../io/netty/util/concurrent/Future.d.ts'
import type { GenericFutureListener } from '../../../../../io/netty/util/concurrent/GenericFutureListener.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CancellableContinuation } from '../../../../../kotlinx/coroutines/CancellableContinuation.d.ts'
export class FutureResultContListener<V extends Object | number | string | boolean, F extends Future<V>> extends Object implements GenericFutureListener<F> {
    constructor(cont: CancellableContinuation<F>)
    // private cont: CancellableContinuation<F>;
    operationComplete(future: F): void;
}