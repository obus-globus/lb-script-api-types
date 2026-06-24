import type { OutputStreamAppender$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { AbstractOutputStreamAppender } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractOutputStreamAppender.d.ts'
import type { OutputStreamManager } from '../../../../../../org/apache/logging/log4j/core/appender/OutputStreamManager.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
export class OutputStreamAppender extends AbstractOutputStreamAppender<OutputStreamManager> {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: (Object | null)[];
    static createAppender(paramlayout: Layout<Serializable>, paramfilter: Filter, paramtarget: OutputStream, paramname: string, paramfollow: boolean, paramignore: boolean): OutputStreamAppender;
    static newBuilder(): Object | null;
    static parseInt(params: string, paramdefaultValue: number): number;
    constructor(arg0: string, arg1: Layout<Serializable>, arg2: Filter, arg3: OutputStreamManager, arg4: boolean, arg5: Property[], arg6: OutputStreamAppender$1)
    private constructor(name: string, layout: Layout<Serializable>, filter: Filter, manager: OutputStreamManager, ignoreExceptions: boolean, properties: Property[])
}