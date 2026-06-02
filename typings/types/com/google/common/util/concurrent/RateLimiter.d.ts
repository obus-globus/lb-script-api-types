import type { RateLimiter$SleepingStopwatch } from '../../../../../com/google/common/util/concurrent/RateLimiter$SleepingStopwatch.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class RateLimiter extends Object {
    static create(parampermitsPerSecond: number): RateLimiter;
    static create(parampermitsPerSecond: number, paramwarmupPeriod: Duration): RateLimiter;
    static create(parampermitsPerSecond: number, paramwarmupPeriod: number, paramunit: TimeUnit): RateLimiter;
    constructor(stopwatch: RateLimiter$SleepingStopwatch)
    // private mutexDoNotUseDirectly: Object;
    // private stopwatch: RateLimiter$SleepingStopwatch;
    acquire(): number;
    acquire(permits: number): number;
    // private canAcquire(nowMicros: number, timeoutMicros: number): boolean;
    doGetRate(): number;
    doSetRate(permitsPerSecond: number, nowMicros: number): void;
    getRate(): number;
    // private mutex(): Object;
    queryEarliestAvailable(nowMicros: number): number;
    reserve(permits: number): number;
    reserveAndGetWaitLength(permits: number, nowMicros: number): number;
    reserveEarliestAvailable(permits: number, nowMicros: number): number;
    setRate(permitsPerSecond: number): void;
    toString(): string;
    tryAcquire(): boolean;
    tryAcquire(timeout: Duration): boolean;
    tryAcquire(permits: number): boolean;
    tryAcquire(permits: number, timeout: Duration): boolean;
    tryAcquire(permits: number, timeout: number, unit: TimeUnit): boolean;
    tryAcquire(timeout: number, unit: TimeUnit): boolean;
}