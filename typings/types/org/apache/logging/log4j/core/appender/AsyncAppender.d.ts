import type { Future } from '../../../../../../java/util/concurrent/Future.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Appender } from '../../../../../../org/apache/logging/log4j/core/Appender.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractAppender } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractAppender.d.ts'
import type { AsyncAppender$Builder } from '../../../../../../org/apache/logging/log4j/core/appender/AsyncAppender$Builder.d.ts'
import type { AsyncAppenderEventDispatcher } from '../../../../../../org/apache/logging/log4j/core/appender/AsyncAppenderEventDispatcher.d.ts'
import type { AsyncQueueFullPolicy } from '../../../../../../org/apache/logging/log4j/core/async/AsyncQueueFullPolicy.d.ts'
import type { BlockingQueueFactory } from '../../../../../../org/apache/logging/log4j/core/async/BlockingQueueFactory.d.ts'
import type { AppenderControl } from '../../../../../../org/apache/logging/log4j/core/config/AppenderControl.d.ts'
import type { AppenderRef } from '../../../../../../org/apache/logging/log4j/core/config/AppenderRef.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
export class AsyncAppender extends AbstractAppender {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: Appender[];
    static createAppender(paramappenderRefs: AppenderRef[], paramerrorRef: string, paramblocking: boolean, paramshutdownTimeout: number, paramsize: number, paramname: string, paramincludeLocation: boolean, paramfilter: Filter, paramconfig: Configuration, paramignoreExceptions: boolean): AsyncAppender;
    static newBuilder(): AsyncAppender$Builder<any>;
    static parseInt(params: string, paramdefaultValue: number): number;
    constructor(arg0: string, arg1: Filter, arg2: AppenderRef[], arg3: string, arg4: number, arg5: boolean, arg6: boolean, arg7: number, arg8: Configuration, arg9: boolean, arg10: BlockingQueueFactory<Object>, arg11: Property[], arg12: any)
    // private appenderRefs: AppenderRef[];
    // private asyncQueueFullPolicy: AsyncQueueFullPolicy;
    readonly blocking: boolean;
    // private config: Configuration;
    // private dispatcher: AsyncAppenderEventDispatcher;
    // private errorAppender: AppenderControl;
    readonly errorRef: string;
    readonly includeLocation: boolean;
    // private queue: LogEvent[];
    readonly queueSize: number;
    // private shutdownTimeout: number;
    append(logEvent: LogEvent): void;
    getAppenderRefStrings(): string[];
    getAppenders(): Appender[];
    getErrorRef(): string;
    getQueueCapacity(): number;
    getQueueRemainingCapacity(): number;
    getQueueSize(): number;
    // private handleInterruptedException(memento: LogEvent): boolean;
    isBlocking(): boolean;
    isIncludeLocation(): boolean;
    logMessageInBackgroundThread(logEvent: LogEvent): void;
    logMessageInCurrentThread(logEvent: LogEvent): void;
    // private logToErrorAppenderIfNecessary(appendSuccessful: boolean, logEvent: LogEvent): void;
    requiresLocation(): boolean;
    start(): void;
    stop(): void;
    stop(future: Future<Object>): boolean;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
    stop(timeout: number, timeUnit: TimeUnit, changeLifeCycleState: boolean): boolean;
    // private transfer(memento: LogEvent): boolean;
}