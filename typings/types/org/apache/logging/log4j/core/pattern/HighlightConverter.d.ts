import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { AnsiConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/AnsiConverter.d.ts'
import type { LogEventPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/LogEventPatternConverter.d.ts'
import type { PatternFormatter } from '../../../../../../org/apache/logging/log4j/core/pattern/PatternFormatter.d.ts'
export class HighlightConverter extends LogEventPatternConverter implements AnsiConverter {
    static CATEGORY: string;
    static newInstance(paramconfig: Configuration, paramoptions: (Object | null)[]): HighlightConverter;
    private constructor(patternFormatters: PatternFormatter[], levelStyles: { [key: string]: string }, noAnsi: boolean)
    // private defaultStyle: string;
    // private levelStyles: { [key: string]: string };
    // private noAnsi: boolean;
    // private patternFormatters: PatternFormatter[];
    format(obj: Object, output: StringBuilder): void;
    format(event: LogEvent, toAppendTo: StringBuilder): void;
    getLevelStyle(level: Level): string;
    handlesThrowable(): boolean;
}