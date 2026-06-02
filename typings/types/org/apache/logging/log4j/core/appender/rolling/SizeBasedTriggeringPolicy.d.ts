import type { TimeUnit } from '../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { LogEvent } from '../../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractTriggeringPolicy } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/AbstractTriggeringPolicy.d.ts'
import type { RollingFileManager } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RollingFileManager.d.ts'
export class SizeBasedTriggeringPolicy extends AbstractTriggeringPolicy {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static createPolicy(paramsize: string): SizeBasedTriggeringPolicy;
    constructor()
    constructor(maxFileSize: number)
    // private manager: RollingFileManager;
    readonly maxFileSize: number;
    getMaxFileSize(): number;
    initialize(aManager: RollingFileManager): void;
    isTriggeringEvent(event: LogEvent): boolean;
    toString(): string;
}