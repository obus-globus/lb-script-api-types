import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CompletedExceptionally } from '../../kotlinx/coroutines/CompletedExceptionally.d.ts'
export class CancelledContinuation extends CompletedExceptionally {
    constructor(continuation: Continuation<Object>, cause: Throwable | null, handled: boolean)
    makeResumed(): boolean;
}