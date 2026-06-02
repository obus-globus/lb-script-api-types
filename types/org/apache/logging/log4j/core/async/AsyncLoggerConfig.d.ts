import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AsyncLoggerConfigDelegate } from '../../../../../../org/apache/logging/log4j/core/async/AsyncLoggerConfigDelegate.d.ts'
import type { AppenderRef } from '../../../../../../org/apache/logging/log4j/core/config/AppenderRef.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { LoggerConfig } from '../../../../../../org/apache/logging/log4j/core/config/LoggerConfig.d.ts'
import type { LoggerConfig$LoggerConfigPredicate } from '../../../../../../org/apache/logging/log4j/core/config/LoggerConfig$LoggerConfigPredicate.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
import type { RingBufferAdmin } from '../../../../../../org/apache/logging/log4j/core/jmx/RingBufferAdmin.d.ts'
export class AsyncLoggerConfig extends LoggerConfig {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ROOT: string;
    static createLogger(paramadditivity: boolean, paramlevel: Level, paramloggerName: string, paramincludeLocation: string, paramrefs: (Object | null)[], paramproperties: (Object | null)[], paramconfig: Configuration, paramfilter: Filter): LoggerConfig;
    static createLogger(paramadditivity: string, paramlevelName: string, paramloggerName: string, paramincludeLocation: string, paramrefs: (Object | null)[], paramproperties: (Object | null)[], paramconfig: Configuration, paramfilter: Filter): LoggerConfig;
    static createLogger(paramadditivity: string, paramlevel: Level, paramloggerName: string, paramincludeLocation: string, paramrefs: (Object | null)[], paramproperties: (Object | null)[], paramconfig: Configuration, paramfilter: Filter): LoggerConfig;
    static newAsyncBuilder(): Object | null;
    static newBuilder(): Object | null;
    constructor(name: string, appenders: AppenderRef[], filter: Filter, level: Level, additive: boolean, properties: Property[], config: Configuration, includeLocation: boolean)
    // private delegate: AsyncLoggerConfigDelegate;
    callAppenders(event: LogEvent): void;
    createRingBufferAdmin(contextName: string): RingBufferAdmin;
    // private displayName(): string;
    getAsyncLoggerConfigDelegate(): AsyncLoggerConfigDelegate;
    // private handleQueueFull(event: LogEvent): void;
    log(event: LogEvent, predicate: LoggerConfig$LoggerConfigPredicate): void;
    logInBackgroundThread(event: LogEvent): void;
    // private logToAsyncDelegate(event: LogEvent): void;
    logToAsyncLoggerConfigsOnCurrentThread(event: LogEvent): void;
    // private populateLazilyInitializedFields(event: LogEvent): void;
    start(): void;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
}