import type { StandardPlural } from '../../../../../com/ibm/icu/impl/StandardPlural.d.ts'
import type { AffixPatternProvider } from '../../../../../com/ibm/icu/impl/number/AffixPatternProvider.d.ts'
import type { DecimalFormatProperties } from '../../../../../com/ibm/icu/impl/number/DecimalFormatProperties.d.ts'
import type { Modifier$Signum } from '../../../../../com/ibm/icu/impl/number/Modifier$Signum.d.ts'
import type { PatternStringUtils$PatternSignType } from '../../../../../com/ibm/icu/impl/number/PatternStringUtils$PatternSignType.d.ts'
import type { NumberFormatter$SignDisplay } from '../../../../../com/ibm/icu/number/NumberFormatter$SignDisplay.d.ts'
import type { DecimalFormatSymbols } from '../../../../../com/ibm/icu/text/DecimalFormatSymbols.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { BigDecimal } from '../../../../../java/math/BigDecimal.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PatternStringUtils extends Object {
    static convertLocalized(paramarg0: string, paramarg1: DecimalFormatSymbols, paramarg2: boolean): string;
    static ignoreRoundingIncrement(paramarg0: BigDecimal, paramarg1: number): boolean;
    static patternInfoToStringBuilder(paramarg0: AffixPatternProvider, paramarg1: boolean, paramarg2: PatternStringUtils$PatternSignType, paramarg3: boolean, paramarg4: StandardPlural, paramarg5: boolean, paramarg6: StringBuilder): void;
    static propertiesToPatternString(paramarg0: DecimalFormatProperties): string;
    static resolveSignDisplay(paramarg0: NumberFormatter$SignDisplay, paramarg1: Modifier$Signum): PatternStringUtils$PatternSignType;
    constructor()
}