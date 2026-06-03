import type { RateLimiter } from '../../../../../com/google/common/util/concurrent/RateLimiter.d.ts'
import type { RateLimiter$SleepingStopwatch } from '../../../../../com/google/common/util/concurrent/RateLimiter$SleepingStopwatch.d.ts'
import type { SmoothRateLimiter } from '../../../../../com/google/common/util/concurrent/SmoothRateLimiter.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
export class SmoothRateLimiter$SmoothWarmingUp extends SmoothRateLimiter {
    static create(parampermitsPerSecond: number): RateLimiter;
    static create(parampermitsPerSecond: number, paramwarmupPeriod: Duration): RateLimiter;
    static create(parampermitsPerSecond: number, paramwarmupPeriod: number, paramunit: TimeUnit): RateLimiter;
    constructor(stopwatch: RateLimiter$SleepingStopwatch, warmupPeriod: number, timeUnit: TimeUnit, coldFactor: number)
    // private coldFactor: number;
    // private slope: number;
    // private thresholdPermits: number;
    // private warmupPeriodMicros: number;
    coolDownIntervalMicros(): number;
    doSetRate(permitsPerSecond: number, stableIntervalMicros: number): void;
    doSetRate(permitsPerSecond: number, nowMicros: number): void;
    // private permitsToTime(permits: number): number;
    storedPermitsToWaitTime(storedPermits: number, permitsToTake: number): number;
}