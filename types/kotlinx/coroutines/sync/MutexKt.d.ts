import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../kotlin/jvm/functions/Function0.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { Mutex } from '../../../kotlinx/coroutines/sync/Mutex.d.ts'
export class MutexKt extends Object {
    static Mutex(paramarg0: boolean): Mutex;
    static withLock(paramarg0: Mutex, paramarg1: Object, paramarg2: Function0<Object>, paramarg3: Continuation<Object>): Object;
}