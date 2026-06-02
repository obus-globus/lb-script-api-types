import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DecimalFormatProperties } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalFormatProperties.d.ts'
import type { DecimalQuantity } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { PatternStringParser$ParsedPatternInfo } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/PatternStringParser$ParsedPatternInfo.d.ts'
import type { NumberFormatter$GroupingStrategy } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberFormatter$GroupingStrategy.d.ts'
import type { ULocale } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class Grouper extends Object {
    static forProperties(paramproperties: DecimalFormatProperties): Grouper;
    static forStrategy(paramgrouping: NumberFormatter$GroupingStrategy): Grouper;
    static getInstance(paramgrouping1: number, paramgrouping2: number, paramminGrouping: number): Grouper;
    private constructor(grouping1: number, grouping2: number, minGrouping: number)
    // private grouping1: number;
    // private grouping2: number;
    // private minGrouping: number;
    getPrimary(): number;
    getSecondary(): number;
    groupAtPosition(position: number, value: DecimalQuantity): boolean;
    withLocaleData(locale: ULocale, patternInfo: PatternStringParser$ParsedPatternInfo): Grouper;
}