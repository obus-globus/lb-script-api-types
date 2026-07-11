import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { ArrayPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/ArrayPatternConverter.d.ts'
import type { LogEventPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/LogEventPatternConverter.d.ts'
export abstract class SimpleLiteralPatternConverter extends LogEventPatternConverter implements ArrayPatternConverter {
    static CATEGORY: string;
    constructor(arg0: any)
    format(output: StringBuilder): void;
    format(output: StringBuilder, ...args: Object[]): void;
    format(ignored: Object, output: StringBuilder): void;
    format(ignored: LogEvent, output: StringBuilder): void;
    handlesThrowable(): boolean;
    isVariable(): boolean;
}