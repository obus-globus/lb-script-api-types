import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { AbstractOutputStreamAppender } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractOutputStreamAppender.d.ts'
import type { MemoryMappedFileManager } from '../../../../../../org/apache/logging/log4j/core/appender/MemoryMappedFileManager.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
import type { Advertiser } from '../../../../../../org/apache/logging/log4j/core/net/Advertiser.d.ts'
export class MemoryMappedFileAppender extends AbstractOutputStreamAppender<MemoryMappedFileManager> {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: (Object | null)[];
    static createAppender(paramfileName: string, paramappend: string, paramname: string, paramimmediateFlush: string, paramregionLengthStr: string, paramignore: string, paramlayout: Layout<Object>, paramfilter: Filter, paramadvertise: string, paramadvertiseURI: string, paramconfig: Configuration): MemoryMappedFileAppender;
    static newBuilder(): Object | null;
    static parseInt(params: string, paramdefaultValue: number): number;
    private constructor(name: string, layout: Layout<Serializable>, filter: Filter, manager: MemoryMappedFileManager, filename: string, ignoreExceptions: boolean, immediateFlush: boolean, advertiser: Advertiser, properties: Property[])
    // private advertisement: Object;
    // private advertiser: Advertiser;
    readonly fileName: string;
    getFileName(): string;
    getRegionLength(): number;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
}