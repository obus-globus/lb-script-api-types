import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { EqualsBaseReplacementConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/EqualsBaseReplacementConverter.d.ts'
import type { PatternFormatter } from '../../../../../../org/apache/logging/log4j/core/pattern/PatternFormatter.d.ts'
import type { PatternParser } from '../../../../../../org/apache/logging/log4j/core/pattern/PatternParser.d.ts'
export class EqualsIgnoreCaseReplacementConverter extends EqualsBaseReplacementConverter {
    static CATEGORY: string;
    static newInstance(paramconfig: Configuration, paramoptions: (Object | null)[]): EqualsIgnoreCaseReplacementConverter;
    private constructor(formatters: PatternFormatter[], testString: string, substitution: string, parser: PatternParser)
    equals(other: Object | null): boolean;
    equals(str: string, buff: StringBuilder, from: number, len: number): boolean;
}