import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DecimalFormatProperties } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalFormatProperties.d.ts'
import type { PatternStringParser$ParsedPatternInfo } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/PatternStringParser$ParsedPatternInfo.d.ts'
export class PatternStringParser extends Object {
    static IGNORE_ROUNDING_ALWAYS: number;
    static IGNORE_ROUNDING_IF_CURRENCY: number;
    static IGNORE_ROUNDING_NEVER: number;
    static parseToExistingProperties(parampattern: string, paramproperties: DecimalFormatProperties): void;
    static parseToExistingProperties(parampattern: string, paramproperties: DecimalFormatProperties, paramignoreRounding: number): void;
    static parseToPatternInfo(parampatternString: string): PatternStringParser$ParsedPatternInfo;
    static parseToProperties(parampattern: string): DecimalFormatProperties;
    static parseToProperties(parampattern: string, paramignoreRounding: number): DecimalFormatProperties;
    constructor()
}