import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { Future } from '../../../../../../../java/util/concurrent/Future.d.ts'
import type { ScheduledFuture } from '../../../../../../../java/util/concurrent/ScheduledFuture.d.ts'
import type { TimeUnit } from '../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AbstractLifeCycle } from '../../../../../../../org/apache/logging/log4j/core/AbstractLifeCycle.d.ts'
import type { LogEvent } from '../../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { PurgePolicy } from '../../../../../../../org/apache/logging/log4j/core/appender/routing/PurgePolicy.d.ts'
import type { RoutingAppender } from '../../../../../../../org/apache/logging/log4j/core/appender/routing/RoutingAppender.d.ts'
import type { Configuration } from '../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { ConfigurationScheduler } from '../../../../../../../org/apache/logging/log4j/core/config/ConfigurationScheduler.d.ts'
export class IdlePurgePolicy extends AbstractLifeCycle implements Runnable, PurgePolicy {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static createPurgePolicy(paramtimeToLive: string, paramcheckInterval: string, paramtimeUnit: string, paramconfiguration: Configuration): PurgePolicy;
    constructor(timeToLive: number, checkInterval: number, scheduler: ConfigurationScheduler)
    // private appendersUsage: { [key: string]: number };
    // private checkInterval: number;
    // private future: ScheduledFuture<Object>;
    // private routingAppender: RoutingAppender;
    // private scheduler: ConfigurationScheduler;
    // private timeToLive: number;
    initialize(): void;
    initialize(routingAppender: RoutingAppender): void;
    purge(): void;
    run(): void;
    // private scheduleNext(): void;
    stop(): void;
    stop(future: Future<Object>): boolean;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
    toString(): string;
    update(key: string, event: LogEvent): void;
}