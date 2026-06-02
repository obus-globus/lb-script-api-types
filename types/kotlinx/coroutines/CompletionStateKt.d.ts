import type { Object } from '../../java/lang/Object.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CancellableContinuation } from '../../kotlinx/coroutines/CancellableContinuation.d.ts'
export class CompletionStateKt extends Object {
    static recoverResult(paramarg0: Object, paramarg1: Continuation<Object>): Object;
    static toState(paramarg0: Object): Object;
    static toState(paramarg0: Object, paramarg1: CancellableContinuation<Object>): Object;
}