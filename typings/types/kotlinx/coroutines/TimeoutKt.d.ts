import type { Object } from '../../java/lang/Object.d.ts'
import type { Function2 } from '../../kotlin/jvm/functions/Function2.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { Delay } from '../../kotlinx/coroutines/Delay.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
import type { TimeoutCancellationException } from '../../kotlinx/coroutines/TimeoutCancellationException.d.ts'
export class TimeoutKt extends Object {
    static TimeoutCancellationException(paramarg0: number, paramarg1: Delay, paramarg2: Job): TimeoutCancellationException;
    static withTimeout(paramarg0: number, paramarg1: Function2<Object, Object, Object>, paramarg2: Continuation<Object>): Object;
//     static withTimeout-KLykuaI(paramarg0: number, paramarg1: Function2<Object, Object, Object>, paramarg2: Continuation<Object>): Object;
 // ; invalid because of -    static withTimeoutOrNull(paramarg0: number, paramarg1: Function2<Object, Object, Object>, paramarg2: Continuation<Object>): Object;
//     static withTimeoutOrNull-KLykuaI(paramarg0: number, paramarg1: Function2<Object, Object, Object>, paramarg2: Continuation<Object>): Object;
 // ; invalid because of -}