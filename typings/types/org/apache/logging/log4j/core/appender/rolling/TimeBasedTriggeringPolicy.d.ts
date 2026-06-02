import type { TimeUnit } from '../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { LogEvent } from '../../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractTriggeringPolicy } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/AbstractTriggeringPolicy.d.ts'
import type { RollingFileManager } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RollingFileManager.d.ts'
import type { TimeBasedTriggeringPolicy$Builder } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/TimeBasedTriggeringPolicy$Builder.d.ts'
export class TimeBasedTriggeringPolicy extends AbstractTriggeringPolicy {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static createPolicy(paraminterval: string, parammodulate: string): TimeBasedTriggeringPolicy;
    static newBuilder(): TimeBasedTriggeringPolicy$Builder;
    private constructor(interval: number, modulate: boolean, maxRandomDelayMillis: number)
    readonly interval: number;
    // private manager: RollingFileManager;
    // private maxRandomDelayMillis: number;
    // private modulate: boolean;
    readonly nextRolloverMillis: number;
    getInterval(): number;
    getNextRolloverMillis(): number;
    initialize(aManager: RollingFileManager): void;
    isTriggeringEvent(event: LogEvent): boolean;
    toString(): string;
}