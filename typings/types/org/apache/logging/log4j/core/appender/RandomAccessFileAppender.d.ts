import type { RandomAccessFileAppender$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Future } from '../../../../../../java/util/concurrent/Future.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { AbstractOutputStreamAppender } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractOutputStreamAppender.d.ts'
import type { RandomAccessFileManager } from '../../../../../../org/apache/logging/log4j/core/appender/RandomAccessFileManager.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
import type { Advertiser } from '../../../../../../org/apache/logging/log4j/core/net/Advertiser.d.ts'
export class RandomAccessFileAppender extends AbstractOutputStreamAppender<RandomAccessFileManager> {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: (Object | null)[];
    static createAppender(paramfileName: string, paramappend: string, paramname: string, paramimmediateFlush: string, parambufferSizeStr: string, paramignore: string, paramlayout: Layout<Serializable>, paramfilter: Filter, paramadvertise: string, paramadvertiseURI: string, paramconfiguration: Configuration): RandomAccessFileAppender;
    static newBuilder(): Object | null;
    static parseInt(params: string, paramdefaultValue: number): number;
    constructor(arg0: string, arg1: Layout<Serializable>, arg2: Filter, arg3: RandomAccessFileManager, arg4: string, arg5: boolean, arg6: boolean, arg7: Advertiser, arg8: Property[], arg9: RandomAccessFileAppender$1)
    private constructor(name: string, layout: Layout<Serializable>, filter: Filter, manager: RandomAccessFileManager, filename: string, ignoreExceptions: boolean, immediateFlush: boolean, advertiser: Advertiser, properties: Property[])
    // private advertisement: Object;
    // private advertiser: Advertiser;
    readonly fileName: string;
    getBufferSize(): number;
    getFileName(): string;
    stop(): void;
    stop(future: Future<Object>): boolean;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
    stop(timeout: number, timeUnit: TimeUnit, changeLifeCycleState: boolean): boolean;
}