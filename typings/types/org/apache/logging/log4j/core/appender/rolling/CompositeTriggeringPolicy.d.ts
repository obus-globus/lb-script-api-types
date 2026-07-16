import type { Future } from '../../../../../../../java/util/concurrent/Future.d.ts'
import type { TimeUnit } from '../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractTriggeringPolicy } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/AbstractTriggeringPolicy.d.ts'
import type { RollingFileManager } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RollingFileManager.d.ts'
import type { TriggeringPolicy } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/TriggeringPolicy.d.ts'
export class CompositeTriggeringPolicy extends AbstractTriggeringPolicy {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static createPolicy(...paramtriggeringPolicy: TriggeringPolicy[]): CompositeTriggeringPolicy;
    private constructor(...triggeringPolicies: TriggeringPolicy[])
    readonly triggeringPolicies: TriggeringPolicy[];
    getTriggeringPolicies(): TriggeringPolicy[];
    initialize(): void;
    initialize(manager: RollingFileManager): void;
    isTriggeringEvent(event: LogEvent): boolean;
    stop(): void;
    stop(future: Future<Object>): boolean;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
    toString(): string;
}