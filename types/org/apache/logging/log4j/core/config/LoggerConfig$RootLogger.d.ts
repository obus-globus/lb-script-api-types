import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { LoggerConfig } from '../../../../../../org/apache/logging/log4j/core/config/LoggerConfig.d.ts'
export class LoggerConfig$RootLogger extends LoggerConfig {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ROOT: string;
    static createLogger(paramadditivity: string, paramlevel: Level, paramincludeLocation: string, paramrefs: (Object | null)[], paramproperties: (Object | null)[], paramconfig: Configuration, paramfilter: Filter): LoggerConfig;
    static createLogger(paramadditivity: boolean, paramlevel: Level, paramloggerName: string, paramincludeLocation: string, paramrefs: (Object | null)[], paramproperties: (Object | null)[], paramconfig: Configuration, paramfilter: Filter): LoggerConfig;
    static createLogger(paramadditivity: string, paramlevel: Level, paramloggerName: string, paramincludeLocation: string, paramrefs: (Object | null)[], paramproperties: (Object | null)[], paramconfig: Configuration, paramfilter: Filter): LoggerConfig;
    static newBuilder(): Object | null;
    static newRootBuilder(): Object | null;
    constructor()
}