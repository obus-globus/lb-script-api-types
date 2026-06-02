import type { RuntimeException } from '../../../../../../java/lang/RuntimeException.d.ts'
import type { ThreadLocal } from '../../../../../../java/lang/ThreadLocal.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Appender } from '../../../../../../org/apache/logging/log4j/core/Appender.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractFilterable } from '../../../../../../org/apache/logging/log4j/core/filter/AbstractFilterable.d.ts'
export class AppenderControl extends AbstractFilterable {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    constructor(appender: Appender, level: Level, filter: Filter)
    readonly appender: Appender;
    readonly appenderName: string;
    // private intLevel: number;
    // private level: Level;
    // private recursive: ThreadLocal<AppenderControl>;
    // private appenderErrorHandlerMessage(prefix: string): string;
    callAppender(event: LogEvent): void;
    // private callAppender0(event: LogEvent): void;
    // private callAppenderPreventRecursion(event: LogEvent): void;
    // private createErrorMsg(prefix: string): string;
    // private ensureAppenderStarted(): void;
    equals(obj: Object | null): boolean;
    getAppender(): Appender;
    getAppenderName(): string;
    // private handleAppenderError(event: LogEvent, ex: RuntimeException): void;
    // private handleError(prefix: string): void;
    hashCode(): number;
    // private isFilteredByAppender(event: LogEvent): boolean;
    // private isFilteredByAppenderControl(event: LogEvent): boolean;
    // private isFilteredByLevel(event: LogEvent): boolean;
    // private isRecursiveCall(): boolean;
    // private shouldSkip(event: LogEvent): boolean;
    toString(): string;
    // private tryCallAppender(event: LogEvent): void;
}