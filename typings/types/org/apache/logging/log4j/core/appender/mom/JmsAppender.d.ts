import type { TimeUnit } from '../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractAppender } from '../../../../../../../org/apache/logging/log4j/core/appender/AbstractAppender.d.ts'
import type { JmsAppender$Builder } from '../../../../../../../org/apache/logging/log4j/core/appender/mom/JmsAppender$Builder.d.ts'
import type { JmsManager } from '../../../../../../../org/apache/logging/log4j/core/appender/mom/JmsManager.d.ts'
export class JmsAppender extends AbstractAppender {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: (Object | null)[];
    static newBuilder(): JmsAppender$Builder<Object>;
    static parseInt(params: string, paramdefaultValue: number): number;
    readonly manager: JmsManager;
    append(event: LogEvent): void;
    getManager(): JmsManager;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
}