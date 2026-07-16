import type { LogListeners$Target } from '../../../../com/mojang/logging/LogListeners$Target.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Appender } from '../../../../org/apache/logging/log4j/core/Appender.d.ts'
import type { Filter } from '../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { Layout } from '../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { LogEvent } from '../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractAppender } from '../../../../org/apache/logging/log4j/core/appender/AbstractAppender.d.ts'
export class ListenerLogAppender extends AbstractAppender {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: Appender[];
    static createAppender(paramarg0: string, paramarg1: string, paramarg2: Layout<Serializable>, paramarg3: Filter, paramarg4: string): ListenerLogAppender;
    static parseInt(params: string, paramdefaultValue: number): number;
    constructor(arg0: string, arg1: Filter, arg2: Layout<Serializable>, arg3: boolean, arg4: LogListeners$Target)
    // private output: LogListeners$Target;
    append(arg0: LogEvent): void;
}