import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Future } from '../../../../../../java/util/concurrent/Future.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Appender } from '../../../../../../org/apache/logging/log4j/core/Appender.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractOutputStreamAppender } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractOutputStreamAppender.d.ts'
import type { RollingRandomAccessFileManager } from '../../../../../../org/apache/logging/log4j/core/appender/rolling/RollingRandomAccessFileManager.d.ts'
import type { RolloverStrategy } from '../../../../../../org/apache/logging/log4j/core/appender/rolling/RolloverStrategy.d.ts'
import type { TriggeringPolicy } from '../../../../../../org/apache/logging/log4j/core/appender/rolling/TriggeringPolicy.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
import type { Advertiser } from '../../../../../../org/apache/logging/log4j/core/net/Advertiser.d.ts'
export class RollingRandomAccessFileAppender extends AbstractOutputStreamAppender<RollingRandomAccessFileManager> {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: Appender[];
    static createAppender(paramfileName: string, paramfilePattern: string, paramappend: string, paramname: string, paramimmediateFlush: string, parambufferSizeStr: string, parampolicy: TriggeringPolicy, paramstrategy: RolloverStrategy, paramlayout: Layout<Serializable>, paramfilter: Filter, paramignoreExceptions: string, paramadvertise: string, paramadvertiseURI: string, paramconfiguration: Configuration): RollingRandomAccessFileAppender;
    static newBuilder(): Object | null;
    static parseInt(params: string, paramdefaultValue: number): number;
    constructor(arg0: string, arg1: Layout<Serializable>, arg2: Filter, arg3: RollingRandomAccessFileManager, arg4: string, arg5: string, arg6: boolean, arg7: boolean, arg8: number, arg9: Advertiser, arg10: Property[], arg11: any)
    // private advertisement: Object;
    // private advertiser: Advertiser;
    readonly fileName: string;
    readonly filePattern: string;
    append(event: LogEvent): void;
    getBufferSize(): number;
    getFileName(): string;
    getFilePattern(): string;
    stop(): void;
    stop(future: Future<Object>): boolean;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
    stop(timeout: number, timeUnit: TimeUnit, changeLifeCycleState: boolean): boolean;
}