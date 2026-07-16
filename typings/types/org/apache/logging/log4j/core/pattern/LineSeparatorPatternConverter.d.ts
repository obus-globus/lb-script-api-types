import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { LogEventPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/LogEventPatternConverter.d.ts'
export class LineSeparatorPatternConverter extends LogEventPatternConverter {
    static CATEGORY: string;
    static newInstance(paramoptions: string[]): LineSeparatorPatternConverter;
    private constructor()
    format(ignored: Object, output: StringBuilder): void;
    format(ignored: LogEvent, toAppendTo: StringBuilder): void;
    isVariable(): boolean;
}