import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Date } from '../../../../../../java/util/Date.d.ts'
import type { Callable } from '../../../../../../java/util/concurrent/Callable.d.ts'
import type { Future } from '../../../../../../java/util/concurrent/Future.d.ts'
import type { ScheduledExecutorService } from '../../../../../../java/util/concurrent/ScheduledExecutorService.d.ts'
import type { ScheduledFuture } from '../../../../../../java/util/concurrent/ScheduledFuture.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractLifeCycle } from '../../../../../../org/apache/logging/log4j/core/AbstractLifeCycle.d.ts'
import type { CronScheduledFuture } from '../../../../../../org/apache/logging/log4j/core/config/CronScheduledFuture.d.ts'
import type { CronExpression } from '../../../../../../org/apache/logging/log4j/core/util/CronExpression.d.ts'
export class ConfigurationScheduler extends AbstractLifeCycle {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    constructor()
    constructor(name: string)
    // private executorService: ScheduledExecutorService;
    // private name: string;
    // private scheduledItems: number;
    decrementScheduledItems(): void;
    // private getExecutorService(): ScheduledExecutorService;
    incrementScheduledItems(): void;
    isExecutorServiceSet(): boolean;
    nextFireInterval(fireDate: Date): number;
    schedule(command: () => void, delay: number, unit: TimeUnit): ScheduledFuture<Object>;
    schedule<V extends Object | number | string | boolean>(callable: () => V, delay: number, unit: TimeUnit): ScheduledFuture<V>;
    scheduleAtFixedRate(command: () => void, initialDelay: number, period: number, unit: TimeUnit): ScheduledFuture<Object>;
    scheduleWithCron(cronExpression: CronExpression, command: () => void): CronScheduledFuture<Object>;
    scheduleWithCron(cronExpression: CronExpression, startDate: Date, command: () => void): CronScheduledFuture<Object>;
    scheduleWithFixedDelay(command: () => void, initialDelay: number, delay: number, unit: TimeUnit): ScheduledFuture<Object>;
    start(): void;
    stop(): void;
    stop(future: Future<Object>): boolean;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
    toString(): string;
}