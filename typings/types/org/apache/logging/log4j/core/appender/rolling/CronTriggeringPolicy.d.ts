import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { Future } from '../../../../../../../java/util/concurrent/Future.d.ts'
import type { TimeUnit } from '../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractTriggeringPolicy } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/AbstractTriggeringPolicy.d.ts'
import type { RollingFileManager } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RollingFileManager.d.ts'
import type { Configuration } from '../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { CronScheduledFuture } from '../../../../../../../org/apache/logging/log4j/core/config/CronScheduledFuture.d.ts'
import type { CronExpression } from '../../../../../../../org/apache/logging/log4j/core/util/CronExpression.d.ts'
export class CronTriggeringPolicy extends AbstractTriggeringPolicy {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static createPolicy(paramconfiguration: Configuration, paramevaluateOnStartup: string, paramschedule: string): CronTriggeringPolicy;
    private constructor(schedule: CronExpression, checkOnStartup: boolean, configuration: Configuration)
    // private checkOnStartup: boolean;
    // private configuration: Configuration;
    readonly cronExpression: CronExpression;
    // private future: CronScheduledFuture<Object>;
    // private lastRollDate: Date;
    // private manager: RollingFileManager;
    getCronExpression(): CronExpression;
    initialize(): void;
    initialize(aManager: RollingFileManager): void;
    isTriggeringEvent(event: LogEvent): boolean;
    // private rollover(): void;
    stop(): void;
    stop(future: Future<Object>): boolean;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
    toString(): string;
}