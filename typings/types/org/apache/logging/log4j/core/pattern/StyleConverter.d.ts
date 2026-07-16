import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { AnsiConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/AnsiConverter.d.ts'
import type { LogEventPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/LogEventPatternConverter.d.ts'
import type { PatternFormatter } from '../../../../../../org/apache/logging/log4j/core/pattern/PatternFormatter.d.ts'
export class StyleConverter extends LogEventPatternConverter implements AnsiConverter {
    static CATEGORY: string;
    static newInstance(paramconfig: Configuration, paramoptions: string[]): StyleConverter;
    private constructor(patternFormatters: PatternFormatter[], style: string, noAnsi: boolean)
    // private defaultStyle: string;
    // private noAnsi: boolean;
    // private patternFormatters: PatternFormatter[];
    // private style: string;
    format(obj: Object, output: StringBuilder): void;
    format(event: LogEvent, toAppendTo: StringBuilder): void;
    handlesThrowable(): boolean;
    toString(): string;
}