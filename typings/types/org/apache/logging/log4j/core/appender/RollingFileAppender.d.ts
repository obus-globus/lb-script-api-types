import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Future } from '../../../../../../java/util/concurrent/Future.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractOutputStreamAppender } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractOutputStreamAppender.d.ts'
import type { RollingFileManager } from '../../../../../../org/apache/logging/log4j/core/appender/rolling/RollingFileManager.d.ts'
import type { RolloverStrategy } from '../../../../../../org/apache/logging/log4j/core/appender/rolling/RolloverStrategy.d.ts'
import type { TriggeringPolicy } from '../../../../../../org/apache/logging/log4j/core/appender/rolling/TriggeringPolicy.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
import type { Advertiser } from '../../../../../../org/apache/logging/log4j/core/net/Advertiser.d.ts'
export class RollingFileAppender extends AbstractOutputStreamAppender<RollingFileManager> {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: (Object | null)[];
    static PLUGIN_NAME: string;
    static createAppender(paramfileName: string, paramfilePattern: string, paramappend: string, paramname: string, parambufferedIO: string, parambufferSizeStr: string, paramimmediateFlush: string, parampolicy: TriggeringPolicy, paramstrategy: RolloverStrategy, paramlayout: Layout<Serializable>, paramfilter: Filter, paramignore: string, paramadvertise: string, paramadvertiseUri: string, paramconfig: Configuration): RollingFileAppender;
    static newBuilder(): Object | null;
    static parseInt(params: string, paramdefaultValue: number): number;
    constructor(arg0: string, arg1: Layout<Serializable>, arg2: Filter, arg3: RollingFileManager, arg4: string, arg5: string, arg6: boolean, arg7: boolean, arg8: Advertiser, arg9: Property[], arg10: any)
    // private advertisement: Object;
    // private advertiser: Advertiser;
    readonly fileName: string;
    readonly filePattern: string;
    append(event: LogEvent): void;
    getFileName(): string;
    getFilePattern(): string;
    getTriggeringPolicy<T extends TriggeringPolicy>(): T;
    stop(): void;
    stop(future: Future<Object>): boolean;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
    stop(timeout: number, timeUnit: TimeUnit, changeLifeCycleState: boolean): boolean;
}