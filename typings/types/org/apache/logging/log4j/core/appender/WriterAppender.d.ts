import type { Writer } from '../../../../../../java/io/Writer.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Appender } from '../../../../../../org/apache/logging/log4j/core/Appender.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { StringLayout } from '../../../../../../org/apache/logging/log4j/core/StringLayout.d.ts'
import type { AbstractWriterAppender } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractWriterAppender.d.ts'
import type { WriterAppender$Builder } from '../../../../../../org/apache/logging/log4j/core/appender/WriterAppender$Builder.d.ts'
import type { WriterManager } from '../../../../../../org/apache/logging/log4j/core/appender/WriterManager.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
export class WriterAppender extends AbstractWriterAppender<WriterManager> {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: Appender[];
    static createAppender(paramlayout: StringLayout, paramfilter: Filter, paramtarget: Writer, paramname: string, paramfollow: boolean, paramignore: boolean): WriterAppender;
    static newBuilder<B extends WriterAppender$Builder<B>>(): B;
    static parseInt(params: string, paramdefaultValue: number): number;
    constructor(arg0: string, arg1: StringLayout, arg2: Filter, arg3: WriterManager, arg4: boolean, arg5: Property[], arg6: any)
}