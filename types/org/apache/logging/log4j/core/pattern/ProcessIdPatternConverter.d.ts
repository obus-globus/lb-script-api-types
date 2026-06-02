import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { LogEventPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/LogEventPatternConverter.d.ts'
export class ProcessIdPatternConverter extends LogEventPatternConverter {
    static CATEGORY: string;
    static main(paramargs: (Object | null)[]): void;
    static newInstance(paramoptions: (Object | null)[]): ProcessIdPatternConverter;
    private constructor(options: string[])
    // private pid: string;
    format(event: LogEvent, toAppendTo: StringBuilder): void;
    getProcessId(): string;
}