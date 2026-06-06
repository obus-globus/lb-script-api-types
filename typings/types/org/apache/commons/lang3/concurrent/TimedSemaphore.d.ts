import type { ScheduledExecutorService } from '../../../../../java/util/concurrent/ScheduledExecutorService.d.ts'
import type { ScheduledFuture } from '../../../../../java/util/concurrent/ScheduledFuture.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TimedSemaphore extends Object {
    static NO_LIMIT: number;
    constructor(arg0: ScheduledExecutorService, arg1: number, arg2: TimeUnit, arg3: number)
    constructor(arg0: number, arg1: TimeUnit, arg2: number)
    readonly acquireCount: number;
    // private executorService: ScheduledExecutorService;
    // private lastCallsPerPeriod: number;
    readonly limit: number;
    // private ownExecutor: boolean;
    readonly period: number;
    // private periodCount: number;
    // private task: ScheduledFuture<Object>;
    // private totalAcquireCount: number;
    readonly unit: TimeUnit;
    acquire(): void;
    // private acquirePermit(): boolean;
    endOfPeriod(): void;
    getAcquireCount(): number;
    getAvailablePermits(): number;
    getAverageCallsPerPeriod(): number;
    getExecutorService(): ScheduledExecutorService;
    getLastAcquiresPerPeriod(): number;
    getLimit(): number;
    getPeriod(): number;
    getUnit(): TimeUnit;
    isShutdown(): boolean;
    // private prepareAcquire(): void;
    setLimit(arg0: number): void;
    shutdown(): void;
    startTimer(): ScheduledFuture<Object>;
    tryAcquire(): boolean;
}