import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { AtomicLong } from '../../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractAppender } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractAppender.d.ts'
export class CountingNoOpAppender extends AbstractAppender {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: (Object | null)[];
    static createAppender(paramname: string): CountingNoOpAppender;
    static parseInt(params: string, paramdefaultValue: number): number;
    constructor(name: string, layout: Layout<any>)
    // private total: AtomicLong;
    append(event: LogEvent): void;
    getCount(): number;
}