import type { DecimalFormatProperties } from '../../../../../com/ibm/icu/impl/number/DecimalFormatProperties.d.ts'
import type { DecimalQuantity } from '../../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { PatternStringParser$ParsedPatternInfo } from '../../../../../com/ibm/icu/impl/number/PatternStringParser$ParsedPatternInfo.d.ts'
import type { NumberFormatter$GroupingStrategy } from '../../../../../com/ibm/icu/number/NumberFormatter$GroupingStrategy.d.ts'
import type { ULocale } from '../../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Grouper extends Object {
    static forProperties(paramarg0: DecimalFormatProperties): Grouper;
    static forStrategy(paramarg0: NumberFormatter$GroupingStrategy): Grouper;
    static getInstance(paramarg0: number, paramarg1: number, paramarg2: number): Grouper;
    private constructor(arg0: number, arg1: number, arg2: number)
    // private grouping1: number;
    // private grouping2: number;
    // private minGrouping: number;
    getPrimary(): number;
    getSecondary(): number;
    groupAtPosition(arg0: number, arg1: DecimalQuantity): boolean;
    withLocaleData(arg0: ULocale, arg1: PatternStringParser$ParsedPatternInfo): Grouper;
}