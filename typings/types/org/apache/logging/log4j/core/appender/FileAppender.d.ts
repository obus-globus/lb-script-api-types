import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Future } from '../../../../../../java/util/concurrent/Future.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Appender } from '../../../../../../org/apache/logging/log4j/core/Appender.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { AbstractOutputStreamAppender } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractOutputStreamAppender.d.ts'
import type { FileManager } from '../../../../../../org/apache/logging/log4j/core/appender/FileManager.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
import type { Advertiser } from '../../../../../../org/apache/logging/log4j/core/net/Advertiser.d.ts'
export class FileAppender extends AbstractOutputStreamAppender<FileManager> {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: Appender[];
    static PLUGIN_NAME: string;
    static createAppender(paramfileName: string, paramappend: string, paramlocking: string, paramname: string, paramimmediateFlush: string, paramignoreExceptions: string, parambufferedIo: string, parambufferSizeStr: string, paramlayout: Layout<Serializable>, paramfilter: Filter, paramadvertise: string, paramadvertiseUri: string, paramconfig: Configuration): FileAppender;
    static newBuilder(): Object | null;
    static parseInt(params: string, paramdefaultValue: number): number;
    constructor(arg0: string, arg1: Layout<Serializable>, arg2: Filter, arg3: FileManager, arg4: string, arg5: boolean, arg6: boolean, arg7: Advertiser, arg8: Property[], arg9: any)
    // private advertisement: Object;
    // private advertiser: Advertiser;
    readonly fileName: string;
    getFileName(): string;
    stop(): void;
    stop(future: Future<Object>): boolean;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
    stop(timeout: number, timeUnit: TimeUnit, changeLifeCycleState: boolean): boolean;
}