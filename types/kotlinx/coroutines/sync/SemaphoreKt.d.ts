import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../kotlin/jvm/functions/Function0.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { Semaphore } from '../../../kotlinx/coroutines/sync/Semaphore.d.ts'
export class SemaphoreKt extends Object {
    static Semaphore(paramarg0: number, paramarg1: number): Semaphore;
    static withPermit(paramarg0: Semaphore, paramarg1: Function0<Object>, paramarg2: Continuation<Object>): Object;
}