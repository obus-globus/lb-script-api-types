import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { LogEventPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/LogEventPatternConverter.d.ts'
export class LevelPatternConverter extends LogEventPatternConverter {
    static CATEGORY: string;
    static newInstance(paramoptions: string[]): LevelPatternConverter;
    constructor(arg0: any)
    format(obj: Object, output: StringBuilder): void;
    format(event: LogEvent, output: StringBuilder): void;
    getStyleClass(e: Object): string;
}