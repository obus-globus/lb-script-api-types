import type { BigDecimal } from '../../../../../../../java/math/BigDecimal.d.ts'
import type { CurrencyPrecision } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/CurrencyPrecision.d.ts'
import type { NumberFormatter$RoundingPriority } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberFormatter$RoundingPriority.d.ts'
import type { Precision } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/Precision.d.ts'
import type { Precision$BogusRounder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/Precision$BogusRounder.d.ts'
import type { Currency$CurrencyUsage } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Currency$CurrencyUsage.d.ts'
export abstract class FractionPrecision extends Precision {
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
    withMaxDigits(maxSignificantDigits: number): Precision;
    withMinDigits(minSignificantDigits: number): Precision;
    withSignificantDigits(minSignificantDigits: number, maxSignificantDigits: number, priority: NumberFormatter$RoundingPriority): Precision;
}