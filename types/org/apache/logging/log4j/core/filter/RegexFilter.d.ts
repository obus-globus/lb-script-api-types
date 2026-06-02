import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Pattern } from '../../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Marker } from '../../../../../../org/apache/logging/log4j/Marker.d.ts'
import type { Filter$Result } from '../../../../../../org/apache/logging/log4j/core/Filter$Result.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Logger } from '../../../../../../org/apache/logging/log4j/core/Logger.d.ts'
import type { AbstractFilter } from '../../../../../../org/apache/logging/log4j/core/filter/AbstractFilter.d.ts'
import type { Message } from '../../../../../../org/apache/logging/log4j/message/Message.d.ts'
export class RegexFilter extends AbstractFilter {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: (Object | null)[];
    static createFilter(paramregex: string, parampatternFlags: (Object | null)[], paramuseRawMsg: boolean, parammatch: Filter$Result, parammismatch: Filter$Result): RegexFilter;
    private constructor(raw: boolean, pattern: Pattern, onMatch: Filter$Result, onMismatch: Filter$Result)
    // private pattern: Pattern;
    // private useRawMessage: boolean;
    // private filter(msg: string): Filter$Result;
    filter(event: LogEvent): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, msg: Object, t: Throwable): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, msg: string, params: Object[]): Filter$Result;
    filter(logger: Logger, level: Level, marker: Marker, msg: Message, t: Throwable): Filter$Result;
    // private targetMessageTest(message: Message): string;
    toString(): string;
}