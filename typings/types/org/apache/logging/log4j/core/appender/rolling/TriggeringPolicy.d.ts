import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { RollingFileManager } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RollingFileManager.d.ts'
export interface TriggeringPolicy extends Object{
    initialize(manager: RollingFileManager): void;
    isTriggeringEvent(logEvent: LogEvent): boolean;
}