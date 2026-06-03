import type { Object } from '../../java/lang/Object.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
export class InterruptibleKt extends Object {
    static runInterruptible(paramarg0: CoroutineContext, paramarg1: () => Object | null, paramarg2: Continuation<Object>): Object;
}