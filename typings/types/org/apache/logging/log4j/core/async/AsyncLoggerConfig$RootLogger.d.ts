import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { AsyncLoggerConfig$RootLogger$Builder } from '../../../../../../org/apache/logging/log4j/core/async/AsyncLoggerConfig$RootLogger$Builder.d.ts'
import type { AppenderRef } from '../../../../../../org/apache/logging/log4j/core/config/AppenderRef.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { LoggerConfig } from '../../../../../../org/apache/logging/log4j/core/config/LoggerConfig.d.ts'
import type { LoggerConfig$Builder } from '../../../../../../org/apache/logging/log4j/core/config/LoggerConfig$Builder.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
export class AsyncLoggerConfig$RootLogger extends LoggerConfig {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ROOT: string;
    static createLogger(paramadditivity: string, paramlevelName: string, paramincludeLocation: string, paramrefs: AppenderRef[], paramproperties: Property[], paramconfig: Configuration, paramfilter: Filter): LoggerConfig;
    static createLogger(paramadditivity: string, paramlevel: Level, paramincludeLocation: string, paramrefs: AppenderRef[], paramproperties: Property[], paramconfig: Configuration, paramfilter: Filter): LoggerConfig;
    static createLogger(paramadditivity: boolean, paramlevel: Level, paramloggerName: string, paramincludeLocation: string, paramrefs: AppenderRef[], paramproperties: Property[], paramconfig: Configuration, paramfilter: Filter): LoggerConfig;
    static createLogger(paramadditivity: string, paramlevel: Level, paramloggerName: string, paramincludeLocation: string, paramrefs: AppenderRef[], paramproperties: Property[], paramconfig: Configuration, paramfilter: Filter): LoggerConfig;
    static newAsyncRootBuilder<B extends AsyncLoggerConfig$RootLogger$Builder<B>>(): B;
    static newBuilder<B extends LoggerConfig$Builder<B>>(): B;
    constructor()
}