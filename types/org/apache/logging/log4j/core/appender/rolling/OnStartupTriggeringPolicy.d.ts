import type { TimeUnit } from '../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { LogEvent } from '../../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractTriggeringPolicy } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/AbstractTriggeringPolicy.d.ts'
import type { RollingFileManager } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RollingFileManager.d.ts'
export class OnStartupTriggeringPolicy extends AbstractTriggeringPolicy {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static createPolicy(paramminSize: number): OnStartupTriggeringPolicy;
    private constructor(minSize: number)
    // private minSize: number;
    initialize(manager: RollingFileManager): void;
    isTriggeringEvent(event: LogEvent): boolean;
    toString(): string;
}