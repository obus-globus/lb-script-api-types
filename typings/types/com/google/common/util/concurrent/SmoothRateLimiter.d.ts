import type { SmoothRateLimiter$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { RateLimiter } from '../../../../../com/google/common/util/concurrent/RateLimiter.d.ts'
import type { RateLimiter$SleepingStopwatch } from '../../../../../com/google/common/util/concurrent/RateLimiter$SleepingStopwatch.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
export abstract class SmoothRateLimiter extends RateLimiter {
    static create(parampermitsPerSecond: number): RateLimiter;
    static create(parampermitsPerSecond: number, paramwarmupPeriod: Duration): RateLimiter;
    static create(parampermitsPerSecond: number, paramwarmupPeriod: number, paramunit: TimeUnit): RateLimiter;
    private constructor(stopwatch: RateLimiter$SleepingStopwatch)
    constructor(arg0: RateLimiter$SleepingStopwatch, arg1: SmoothRateLimiter$1)
    // private maxPermits: number;
    // private nextFreeTicketMicros: number;
    // private stableIntervalMicros: number;
    // private storedPermits: number;
    coolDownIntervalMicros(): number;
    doGetRate(): number;
    doSetRate(permitsPerSecond: number, stableIntervalMicros: number): void;
    doSetRate(permitsPerSecond: number, nowMicros: number): void;
    queryEarliestAvailable(nowMicros: number): number;
    reserveEarliestAvailable(requiredPermits: number, nowMicros: number): number;
    resync(nowMicros: number): void;
    storedPermitsToWaitTime(storedPermits: number, permitsToTake: number): number;
}