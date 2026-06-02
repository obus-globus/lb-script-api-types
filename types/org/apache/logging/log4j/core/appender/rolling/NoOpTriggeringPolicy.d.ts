import type { TimeUnit } from '../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { LogEvent } from '../../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractTriggeringPolicy } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/AbstractTriggeringPolicy.d.ts'
import type { RollingFileManager } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RollingFileManager.d.ts'
export class NoOpTriggeringPolicy extends AbstractTriggeringPolicy {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static INSTANCE: NoOpTriggeringPolicy;
    static createPolicy(): NoOpTriggeringPolicy;
    constructor()
    initialize(manager: RollingFileManager): void;
    isTriggeringEvent(logEvent: LogEvent): boolean;
}