import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
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
    static EMPTY_ARRAY: (Object | null)[];
    static createAppender(paramfileName: string, paramfilePattern: string, paramappend: string, paramname: string, paramimmediateFlush: string, parambufferSizeStr: string, parampolicy: TriggeringPolicy, paramstrategy: RolloverStrategy, paramlayout: Layout<Object>, paramfilter: Filter, paramignoreExceptions: string, paramadvertise: string, paramadvertiseURI: string, paramconfiguration: Configuration): RollingRandomAccessFileAppender;
    static newBuilder(): Object | null;
    static parseInt(params: string, paramdefaultValue: number): number;
    private constructor(name: string, layout: Layout<Serializable>, filter: Filter, manager: RollingRandomAccessFileManager, fileName: string, filePattern: string, ignoreExceptions: boolean, immediateFlush: boolean, bufferSize: number, advertiser: Advertiser, properties: Property[])
    // private advertisement: Object;
    // private advertiser: Advertiser;
    readonly fileName: string;
    readonly filePattern: string;
    append(event: LogEvent): void;
    getBufferSize(): number;
    getFileName(): string;
    getFilePattern(): string;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
}