import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { Appender } from '../../../../../../org/apache/logging/log4j/core/Appender.d.ts'
import type { ErrorHandler } from '../../../../../../org/apache/logging/log4j/core/ErrorHandler.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
export class DefaultErrorHandler extends Object implements ErrorHandler {
    constructor(appender: Appender)
    readonly appender: Appender;
    // private exceptionCount: number;
    // private lastExceptionInstantNanos: number;
    // private acquirePermit(): boolean;
    error(msg: string): void;
    error(msg: string, error: Throwable): void;
    error(msg: string, event: LogEvent, error: Throwable): void;
    getAppender(): Appender;
}