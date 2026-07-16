import type { Object } from '../../java/lang/Object.d.ts'
import type { Duration } from '../../kotlin/time/Duration.d.ts'
import type { CoroutineScope } from '../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { Delay } from '../../kotlinx/coroutines/Delay.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
import type { TimeoutCancellationException } from '../../kotlinx/coroutines/TimeoutCancellationException.d.ts'
export class TimeoutKt extends Object {
    static TimeoutCancellationException(time: number, delay: Delay, coroutine: Job, coroutineName: string | null): TimeoutCancellationException;
    static withTimeout<T extends unknown>(timeMillis: number, block: (param0: CoroutineScope) => T): T;
// (invalid TS: name contains '-')     static withTimeout-KLykuaI<T extends unknown>(timeout: Duration, block: (param0: CoroutineScope) => T): T;
    static withTimeoutOrNull<T extends unknown>(timeMillis: number, block: (param0: CoroutineScope) => T): T | null;
// (invalid TS: name contains '-')     static withTimeoutOrNull-KLykuaI<T extends unknown>(timeout: Duration, block: (param0: CoroutineScope) => T): T | null;
}