import type { CurrencyPrecision } from '../../../../com/ibm/icu/number/CurrencyPrecision.d.ts'
import type { NumberFormatter$RoundingPriority } from '../../../../com/ibm/icu/number/NumberFormatter$RoundingPriority.d.ts'
import type { Precision } from '../../../../com/ibm/icu/number/Precision.d.ts'
import type { Precision$BogusRounder } from '../../../../com/ibm/icu/number/Precision$BogusRounder.d.ts'
import type { Currency$CurrencyUsage } from '../../../../com/ibm/icu/util/Currency$CurrencyUsage.d.ts'
import type { BigDecimal } from '../../../../java/math/BigDecimal.d.ts'
export abstract class FractionPrecision extends Precision {
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
    withMaxDigits(arg0: number): Precision;
    withMinDigits(arg0: number): Precision;
    withSignificantDigits(arg0: number, arg1: number, arg2: NumberFormatter$RoundingPriority): Precision;
}