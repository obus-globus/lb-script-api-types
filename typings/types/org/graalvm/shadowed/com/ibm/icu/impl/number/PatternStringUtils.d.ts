import type { StringBuilder } from '../../../../../../../../java/lang/StringBuilder.d.ts'
import type { BigDecimal } from '../../../../../../../../java/math/BigDecimal.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { StandardPlural } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StandardPlural.d.ts'
import type { AffixPatternProvider } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/AffixPatternProvider.d.ts'
import type { DecimalFormatProperties } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalFormatProperties.d.ts'
import type { Modifier$Signum } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Modifier$Signum.d.ts'
import type { PatternStringUtils$PatternSignType } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/PatternStringUtils$PatternSignType.d.ts'
import type { NumberFormatter$SignDisplay } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberFormatter$SignDisplay.d.ts'
import type { DecimalFormatSymbols } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DecimalFormatSymbols.d.ts'
export class PatternStringUtils extends Object {
    static convertLocalized(paraminput: string, paramsymbols: DecimalFormatSymbols, paramtoLocalized: boolean): string;
    static ignoreRoundingIncrement(paramroundIncrDec: BigDecimal, parammaxFrac: number): boolean;
    static patternInfoToStringBuilder(parampatternInfo: AffixPatternProvider, paramisPrefix: boolean, parampatternSignType: PatternStringUtils$PatternSignType, paramapproximately: boolean, paramplural: StandardPlural, paramperMilleReplacesPercent: boolean, paramoutput: StringBuilder): void;
    static propertiesToPatternString(paramproperties: DecimalFormatProperties): string;
    static resolveSignDisplay(paramsignDisplay: NumberFormatter$SignDisplay, paramsignum: Modifier$Signum): PatternStringUtils$PatternSignType;
    constructor()
}