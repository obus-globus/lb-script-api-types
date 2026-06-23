import type { Date } from '../../../../../../java/util/Date.d.ts'
import type { Delayed } from '../../../../../../java/util/concurrent/Delayed.d.ts'
import type { ScheduledFuture } from '../../../../../../java/util/concurrent/ScheduledFuture.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CronScheduledFuture$FutureData } from '../../../../../../org/apache/logging/log4j/core/config/CronScheduledFuture$FutureData.d.ts'
export class CronScheduledFuture<V extends unknown> extends Object implements ScheduledFuture<V> {
    constructor(future: ScheduledFuture<V>, runDate: Date)
    // private futureData: CronScheduledFuture$FutureData;
    cancel(mayInterruptIfRunning: boolean): boolean;
    compareTo(delayed: Delayed): number;
    get(): V;
    get(timeout: number, unit: TimeUnit): V;
    getDelay(unit: TimeUnit): number;
    getFireTime(): Date;
    isCancelled(): boolean;
    isDone(): boolean;
    reset(future: ScheduledFuture<Object>, runDate: Date): void;
}