import type { TimeLimiter } from '../../../../../com/google/common/util/concurrent/TimeLimiter.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FakeTimeLimiter extends Object implements TimeLimiter {
    constructor()
    callUninterruptiblyWithTimeout<T extends unknown>(callable: () => T, timeout: Duration): T;
    callUninterruptiblyWithTimeout<T extends unknown>(callable: () => T, timeoutDuration: number, timeoutUnit: TimeUnit): T;
    callWithTimeout<T extends unknown>(callable: () => T, timeout: Duration): T;
    callWithTimeout<T extends unknown>(callable: () => T, timeoutDuration: number, timeoutUnit: TimeUnit): T;
    newProxy<T extends unknown>(target: T, interfaceType: Class<T>, timeout: Duration): T;
    newProxy<T extends unknown>(target: T, interfaceType: Class<T>, timeoutDuration: number, timeoutUnit: TimeUnit): T;
    runUninterruptiblyWithTimeout(runnable: () => void, timeout: Duration): void;
    runUninterruptiblyWithTimeout(runnable: () => void, timeoutDuration: number, timeoutUnit: TimeUnit): void;
    runWithTimeout(runnable: () => void, timeout: Duration): void;
    runWithTimeout(runnable: () => void, timeoutDuration: number, timeoutUnit: TimeUnit): void;
}