import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { LogEventPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/LogEventPatternConverter.d.ts'
import type { PatternFormatter } from '../../../../../../org/apache/logging/log4j/core/pattern/PatternFormatter.d.ts'
export class VariablesNotEmptyReplacementConverter extends LogEventPatternConverter {
    static CATEGORY: string;
    static newInstance(paramconfig: Configuration, paramoptions: string[]): VariablesNotEmptyReplacementConverter;
    private constructor(formatters: PatternFormatter[])
    // private formatters: PatternFormatter[];
    format(obj: Object, output: StringBuilder): void;
    format(event: LogEvent, toAppendTo: StringBuilder): void;
    handlesThrowable(): boolean;
}