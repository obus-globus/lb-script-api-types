import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { FormattingInfo } from '../../../../../../org/apache/logging/log4j/core/pattern/FormattingInfo.d.ts'
import type { LogEventPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/LogEventPatternConverter.d.ts'
export class PatternFormatter extends Object {
    static EMPTY_ARRAY: PatternFormatter[];
    constructor(converter: LogEventPatternConverter, field: FormattingInfo)
    readonly converter: LogEventPatternConverter;
    // private field: FormattingInfo;
    // private skipFormattingInfo: boolean;
    format(event: LogEvent, buf: StringBuilder): void;
    // private formatWithInfo(event: LogEvent, buf: StringBuilder): void;
    getConverter(): LogEventPatternConverter;
    getFormattingInfo(): FormattingInfo;
    handlesThrowable(): boolean;
    requiresLocation(): boolean;
    toString(): string;
}