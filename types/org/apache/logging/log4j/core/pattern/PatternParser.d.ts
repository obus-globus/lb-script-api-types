import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { FormattingInfo } from '../../../../../../org/apache/logging/log4j/core/pattern/FormattingInfo.d.ts'
import type { LogEventPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/LogEventPatternConverter.d.ts'
import type { PatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/PatternConverter.d.ts'
import type { PatternFormatter } from '../../../../../../org/apache/logging/log4j/core/pattern/PatternFormatter.d.ts'
export class PatternParser extends Object {
    constructor(converterKey: string)
    constructor(config: Configuration, converterKey: string, expected: Class<Object>)
    constructor(config: Configuration, converterKey: string, expectedClass: Class<Object>, filterClass: Class<Object>)
    // private config: Configuration;
    // private converterRules: { [key: string]: Class<PatternConverter> };
    // private createConverter(converterId: string, currentLiteral: StringBuilder, rules: { [key: string]: Class<PatternConverter> }, options: string[], disableAnsi: boolean, noConsoleNoAnsi: boolean): PatternConverter;
    // private finalizeConverter(c: string, pattern: string, start: number, currentLiteral: StringBuilder, formattingInfo: FormattingInfo, rules: { [key: string]: Class<PatternConverter> }, patternConverters: PatternConverter[], formattingInfos: FormattingInfo[], disableAnsi: boolean, noConsoleNoAnsi: boolean, convertBackslashes: boolean): number;
    // private literalPattern(literal: string, convertBackslashes: boolean): LogEventPatternConverter;
    parse(pattern: string): PatternFormatter[];
    parse(pattern: string, alwaysWriteExceptions: boolean, noConsoleNoAnsi: boolean): PatternFormatter[];
    parse(pattern: string, alwaysWriteExceptions: boolean, disableAnsi: boolean, noConsoleNoAnsi: boolean): PatternFormatter[];
    parse(pattern: string, patternConverters: PatternConverter[], formattingInfos: FormattingInfo[], noConsoleNoAnsi: boolean, convertBackslashes: boolean): void;
    parse(pattern: string, patternConverters: PatternConverter[], formattingInfos: FormattingInfo[], disableAnsi: boolean, noConsoleNoAnsi: boolean, convertBackslashes: boolean): void;
}