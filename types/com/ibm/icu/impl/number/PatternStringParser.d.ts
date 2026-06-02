import type { DecimalFormatProperties } from '../../../../../com/ibm/icu/impl/number/DecimalFormatProperties.d.ts'
import type { PatternStringParser$ParsedPatternInfo } from '../../../../../com/ibm/icu/impl/number/PatternStringParser$ParsedPatternInfo.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PatternStringParser extends Object {
    static IGNORE_ROUNDING_ALWAYS: number;
    static IGNORE_ROUNDING_IF_CURRENCY: number;
    static IGNORE_ROUNDING_NEVER: number;
    static parseToExistingProperties(paramarg0: string, paramarg1: DecimalFormatProperties): void;
    static parseToExistingProperties(paramarg0: string, paramarg1: DecimalFormatProperties, paramarg2: number): void;
    static parseToPatternInfo(paramarg0: string): PatternStringParser$ParsedPatternInfo;
    static parseToProperties(paramarg0: string): DecimalFormatProperties;
    static parseToProperties(paramarg0: string, paramarg1: number): DecimalFormatProperties;
    constructor()
}