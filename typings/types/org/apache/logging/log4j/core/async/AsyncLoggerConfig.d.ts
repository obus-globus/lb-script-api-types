import type { StackTraceElement } from '../../../../../../java/lang/StackTraceElement.d.ts'
import type { Future } from '../../../../../../java/util/concurrent/Future.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Marker } from '../../../../../../org/apache/logging/log4j/Marker.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AsyncLoggerConfig$Builder } from '../../../../../../org/apache/logging/log4j/core/async/AsyncLoggerConfig$Builder.d.ts'
import type { AsyncLoggerConfigDelegate } from '../../../../../../org/apache/logging/log4j/core/async/AsyncLoggerConfigDelegate.d.ts'
import type { AppenderRef } from '../../../../../../org/apache/logging/log4j/core/config/AppenderRef.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { LoggerConfig } from '../../../../../../org/apache/logging/log4j/core/config/LoggerConfig.d.ts'
import type { LoggerConfig$Builder } from '../../../../../../org/apache/logging/log4j/core/config/LoggerConfig$Builder.d.ts'
import type { LoggerConfig$LoggerConfigPredicate } from '../../../../../../org/apache/logging/log4j/core/config/LoggerConfig$LoggerConfigPredicate.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
import type { RingBufferAdmin } from '../../../../../../org/apache/logging/log4j/core/jmx/RingBufferAdmin.d.ts'
import type { Message } from '../../../../../../org/apache/logging/log4j/message/Message.d.ts'
export class AsyncLoggerConfig extends LoggerConfig {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ROOT: string;
    static createLogger(paramadditivity: boolean, paramlevel: Level, paramloggerName: string, paramincludeLocation: string, paramrefs: AppenderRef[], paramproperties: Property[], paramconfig: Configuration, paramfilter: Filter): LoggerConfig;
    static createLogger(paramadditivity: string, paramlevelName: string, paramloggerName: string, paramincludeLocation: string, paramrefs: AppenderRef[], paramproperties: Property[], paramconfig: Configuration, paramfilter: Filter): LoggerConfig;
    static createLogger(paramadditivity: string, paramlevel: Level, paramloggerName: string, paramincludeLocation: string, paramrefs: AppenderRef[], paramproperties: Property[], paramconfig: Configuration, paramfilter: Filter): LoggerConfig;
    static newAsyncBuilder<B extends AsyncLoggerConfig$Builder<B>>(): B;
    static newBuilder<B extends LoggerConfig$Builder<B>>(): B;
    constructor(name: string, appenders: AppenderRef[], filter: Filter, level: Level, additive: boolean, properties: Property[], config: Configuration, includeLocation: boolean)
    // private delegate: AsyncLoggerConfigDelegate;
    callAppenders(event: LogEvent): void;
    createRingBufferAdmin(contextName: string): RingBufferAdmin;
    // private displayName(): string;
    getAsyncLoggerConfigDelegate(): AsyncLoggerConfigDelegate;
    // private handleQueueFull(event: LogEvent): void;
    log(loggerName: string, fqcn: string, location: StackTraceElement, marker: Marker, level: Level, data: Message, t: Throwable): void;
    log(loggerName: string, fqcn: string, marker: Marker, level: Level, data: Message, t: Throwable): void;
    log(event: LogEvent): void;
    log(event: LogEvent, predicate: LoggerConfig$LoggerConfigPredicate): void;
    logInBackgroundThread(event: LogEvent): void;
    // private logToAsyncDelegate(event: LogEvent): void;
    logToAsyncLoggerConfigsOnCurrentThread(event: LogEvent): void;
    // private populateLazilyInitializedFields(event: LogEvent): void;
    start(): void;
    stop(): void;
    stop(future: Future<Object>): boolean;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
    stop(timeout: number, timeUnit: TimeUnit, changeLifeCycleState: boolean): boolean;
}