import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/AbstractPatternConverter.d.ts'
export abstract class LogEventPatternConverter extends AbstractPatternConverter {
    static CATEGORY: string;
    constructor(name: string, style: string)
    emptyVariableOutput(): string;
    format(obj: Object, output: StringBuilder): void;
    format(event: LogEvent, toAppendTo: StringBuilder): void;
    handlesThrowable(): boolean;
    isVariable(): boolean;
}