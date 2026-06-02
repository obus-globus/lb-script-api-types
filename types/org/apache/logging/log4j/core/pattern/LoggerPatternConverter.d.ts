import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { NamePatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/NamePatternConverter.d.ts'
export class LoggerPatternConverter extends NamePatternConverter {
    static CATEGORY: string;
    static newInstance(paramoptions: (Object | null)[]): LoggerPatternConverter;
    private constructor(options: string[])
    format(event: LogEvent, toAppendTo: StringBuilder): void;
}