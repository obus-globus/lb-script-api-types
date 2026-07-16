import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Date } from '../../../../../../java/util/Date.d.ts'
import type { TimeZone } from '../../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { ArrayPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/ArrayPatternConverter.d.ts'
import type { LogEventPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/LogEventPatternConverter.d.ts'
import type { Instant } from '../../../../../../org/apache/logging/log4j/core/time/Instant.d.ts'
import type { InstantFormatter } from '../../../../../../org/apache/logging/log4j/core/util/internal/instant/InstantFormatter.d.ts'
export class DatePatternConverter extends LogEventPatternConverter implements ArrayPatternConverter {
    static CATEGORY: string;
    static newInstance(paramoptions: string[]): DatePatternConverter;
    private constructor(options: string[])
    // private formatter: InstantFormatter;
    format(buffer: StringBuilder, ...objects: Object[]): void;
    format(date: Date, buffer: StringBuilder): void;
    format(object: Object, buffer: StringBuilder): void;
    format(epochMillis: number, buffer: StringBuilder): void;
    format(event: LogEvent, output: StringBuilder): void;
    format(instant: Instant, buffer: StringBuilder): void;
    getPattern(): string;
    getTimeZone(): TimeZone;
}