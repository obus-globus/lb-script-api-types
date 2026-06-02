import type { BigDecimal } from '../../../../../../../java/math/BigDecimal.d.ts'
import type { MathContext } from '../../../../../../../java/math/MathContext.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DecimalQuantity } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { MultiplierProducer } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MultiplierProducer.d.ts'
import type { CurrencyPrecision } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/CurrencyPrecision.d.ts'
import type { FractionPrecision } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/FractionPrecision.d.ts'
import type { NumberFormatter$TrailingZeroDisplay } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberFormatter$TrailingZeroDisplay.d.ts'
import type { Precision$BogusRounder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/Precision$BogusRounder.d.ts'
import type { Currency } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Currency.d.ts'
import type { Currency$CurrencyUsage } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Currency$CurrencyUsage.d.ts'
export abstract class Precision extends Object {
    static BOGUS_PRECISION: Precision$BogusRounder;
    static currency(paramcurrencyUsage: Currency$CurrencyUsage): CurrencyPrecision;
    static fixedFraction(paramminMaxFractionPlaces: number): FractionPrecision;
    static fixedSignificantDigits(paramminMaxSignificantDigits: number): Precision;
    static increment(paramroundingIncrement: BigDecimal): Precision;
    static integer(): FractionPrecision;
    static maxFraction(parammaxFractionPlaces: number): FractionPrecision;
    static maxSignificantDigits(parammaxSignificantDigits: number): Precision;
    static minFraction(paramminFractionPlaces: number): FractionPrecision;
    static minMaxFraction(paramminFractionPlaces: number, parammaxFractionPlaces: number): FractionPrecision;
    static minMaxSignificantDigits(paramminSignificantDigits: number, parammaxSignificantDigits: number): Precision;
    static minSignificantDigits(paramminSignificantDigits: number): Precision;
    static unlimited(): Precision;
    constructor()
    // private mathContext: MathContext;
    // private trailingZeroDisplay: NumberFormatter$TrailingZeroDisplay;
    apply(value: DecimalQuantity): void;
    chooseMultiplierAndApply(input: DecimalQuantity, producer: MultiplierProducer): number;
    createCopy(): Precision;
    createCopyHelper(copy: Precision): void;
    setResolvedMinFraction(value: DecimalQuantity, resolvedMinFraction: number): void;
    trailingZeroDisplay(trailingZeroDisplay: NumberFormatter$TrailingZeroDisplay): Precision;
    withLocaleData(currency: Currency): Precision;
    withMode(mathContext: MathContext): Precision;
}