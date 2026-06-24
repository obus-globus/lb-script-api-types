import type { ConsoleAppender$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { AbstractOutputStreamAppender } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractOutputStreamAppender.d.ts'
import type { ConsoleAppender$Target } from '../../../../../../org/apache/logging/log4j/core/appender/ConsoleAppender$Target.d.ts'
import type { OutputStreamManager } from '../../../../../../org/apache/logging/log4j/core/appender/OutputStreamManager.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
export class ConsoleAppender extends AbstractOutputStreamAppender<OutputStreamManager> {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: (Object | null)[];
    static PLUGIN_NAME: string;
    static createAppender(paramlayout: Layout<Serializable>, paramfilter: Filter, paramtarget: string, paramname: string, paramfollow: string, paramignoreExceptions: string): ConsoleAppender;
    static createAppender(paramlayout: Layout<Serializable>, paramfilter: Filter, paramtarget: ConsoleAppender$Target, paramname: string, paramfollow: boolean, paramdirect: boolean, paramignoreExceptions: boolean): ConsoleAppender;
    static createDefaultAppenderForLayout(paramlayout: Layout<Serializable>): ConsoleAppender;
    static newBuilder(): Object | null;
    static parseInt(params: string, paramdefaultValue: number): number;
    constructor(arg0: string, arg1: Layout<Serializable>, arg2: Filter, arg3: OutputStreamManager, arg4: boolean, arg5: ConsoleAppender$Target, arg6: Property[], arg7: ConsoleAppender$1)
    private constructor(name: string, layout: Layout<Serializable>, filter: Filter, manager: OutputStreamManager, ignoreExceptions: boolean, target: ConsoleAppender$Target, properties: Property[])
    readonly target: ConsoleAppender$Target;
    getTarget(): ConsoleAppender$Target;
}