import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { LogEventPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/LogEventPatternConverter.d.ts'
import type { PatternFormatter } from '../../../../../../org/apache/logging/log4j/core/pattern/PatternFormatter.d.ts'
import type { PatternParser } from '../../../../../../org/apache/logging/log4j/core/pattern/PatternParser.d.ts'
export abstract class EqualsBaseReplacementConverter extends LogEventPatternConverter {
    static CATEGORY: string;
    constructor(name: string, style: string, formatters: PatternFormatter[], testString: string, substitution: string, parser: PatternParser)
    // private formatters: PatternFormatter[];
    // private substitution: string;
    // private substitutionFormatters: PatternFormatter[];
    // private testString: string;
    equals(other: Object | null): boolean;
    equals(str: string, buff: StringBuilder, from: number, len: number): boolean;
    format(obj: Object, output: StringBuilder): void;
    format(event: LogEvent, toAppendTo: StringBuilder): void;
    handlesThrowable(): boolean;
    parseSubstitution(event: LogEvent, substitutionBuffer: StringBuilder): void;
}