import type { Object } from '../../java/lang/Object.d.ts'
import type { Function0 } from '../../kotlin/jvm/functions/Function0.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
export class InterruptibleKt extends Object {
    static runInterruptible(paramarg0: CoroutineContext, paramarg1: Function0<Object>, paramarg2: Continuation<Object>): Object;
}