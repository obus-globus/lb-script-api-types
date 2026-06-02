import type { Future } from '../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CancellableContinuation } from '../../kotlinx/coroutines/CancellableContinuation.d.ts'
export class JobKt__FutureKt extends Object {
    static cancelFutureOnCancellation(paramarg0: CancellableContinuation<Object>, paramarg1: Future<Object>): void;
}