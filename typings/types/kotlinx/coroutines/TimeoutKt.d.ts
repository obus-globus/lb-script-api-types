import type { Object } from '../../java/lang/Object.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { Delay } from '../../kotlinx/coroutines/Delay.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
import type { TimeoutCancellationException } from '../../kotlinx/coroutines/TimeoutCancellationException.d.ts'
export class TimeoutKt extends Object {
    static TimeoutCancellationException(paramarg0: number, paramarg1: Delay, paramarg2: Job): TimeoutCancellationException;
    static withTimeout(paramarg0: number, paramarg1: (param0: Object | null, param1: Object | null) => Object | null, paramarg2: Continuation<Object>): Object;
// (invalid TS: name contains '-')     static withTimeout-KLykuaI(paramarg0: number, paramarg1: (param0: Object | null, param1: Object | null) => Object | null, paramarg2: Continuation<Object>): Object;
    static withTimeoutOrNull(paramarg0: number, paramarg1: (param0: Object | null, param1: Object | null) => Object | null, paramarg2: Continuation<Object>): Object;
// (invalid TS: name contains '-')     static withTimeoutOrNull-KLykuaI(paramarg0: number, paramarg1: (param0: Object | null, param1: Object | null) => Object | null, paramarg2: Continuation<Object>): Object;
}