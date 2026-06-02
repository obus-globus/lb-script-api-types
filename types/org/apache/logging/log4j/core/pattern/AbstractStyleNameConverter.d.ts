import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { LogEventPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/LogEventPatternConverter.d.ts'
import type { PatternFormatter } from '../../../../../../org/apache/logging/log4j/core/pattern/PatternFormatter.d.ts'
export abstract class AbstractStyleNameConverter extends LogEventPatternConverter {
    static CATEGORY: string;
    constructor(name: string, formatters: PatternFormatter[], styling: string)
    // private formatters: PatternFormatter[];
    // private style: string;
    format(event: LogEvent, toAppendTo: StringBuilder): void;
    handlesThrowable(): boolean;
}