import type { DecimalQuantity } from '../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { MultiplierProducer } from '../../../../com/ibm/icu/impl/number/MultiplierProducer.d.ts'
import type { CurrencyPrecision } from '../../../../com/ibm/icu/number/CurrencyPrecision.d.ts'
import type { FractionPrecision } from '../../../../com/ibm/icu/number/FractionPrecision.d.ts'
import type { NumberFormatter$TrailingZeroDisplay } from '../../../../com/ibm/icu/number/NumberFormatter$TrailingZeroDisplay.d.ts'
import type { Precision$BogusRounder } from '../../../../com/ibm/icu/number/Precision$BogusRounder.d.ts'
import type { Currency } from '../../../../com/ibm/icu/util/Currency.d.ts'
import type { Currency$CurrencyUsage } from '../../../../com/ibm/icu/util/Currency$CurrencyUsage.d.ts'
import type { BigDecimal } from '../../../../java/math/BigDecimal.d.ts'
import type { MathContext } from '../../../../java/math/MathContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Precision extends Object {
    static BOGUS_PRECISION: Precision$BogusRounder;
    static currency(paramarg0: Currency$CurrencyUsage): CurrencyPrecision;
    static fixedFraction(paramarg0: number): FractionPrecision;
    static fixedSignificantDigits(paramarg0: number): Precision;
    static increment(paramarg0: BigDecimal): Precision;
    static integer(): FractionPrecision;
    static maxFraction(paramarg0: number): FractionPrecision;
    static maxSignificantDigits(paramarg0: number): Precision;
    static minFraction(paramarg0: number): FractionPrecision;
    static minMaxFraction(paramarg0: number, paramarg1: number): FractionPrecision;
    static minMaxSignificantDigits(paramarg0: number, paramarg1: number): Precision;
    static minSignificantDigits(paramarg0: number): Precision;
    static unlimited(): Precision;
    constructor()
    // private mathContext: MathContext;
    // private trailingZeroDisplay: NumberFormatter$TrailingZeroDisplay;
    apply(arg0: DecimalQuantity): void;
    chooseMultiplierAndApply(arg0: DecimalQuantity, arg1: MultiplierProducer): number;
    createCopy(): Precision;
    createCopyHelper(arg0: Precision): void;
    setResolvedMinFraction(arg0: DecimalQuantity, arg1: number): void;
    trailingZeroDisplay(arg0: NumberFormatter$TrailingZeroDisplay): Precision;
    withLocaleData(arg0: Currency): Precision;
    withMode(arg0: MathContext): Precision;
}