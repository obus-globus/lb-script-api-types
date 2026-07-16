import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Appender } from '../../../../../../org/apache/logging/log4j/core/Appender.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractAppender } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractAppender.d.ts'
export class NullAppender extends AbstractAppender {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: Appender[];
    static PLUGIN_NAME: string;
    static createAppender(paramname: string): NullAppender;
    static parseInt(params: string, paramdefaultValue: number): number;
    private constructor(name: string)
    append(event: LogEvent): void;
}