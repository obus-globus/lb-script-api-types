import type { BigDecimal } from '../../../../../../../java/math/BigDecimal.d.ts'
import type { DecimalQuantity } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { CurrencyPrecision } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/CurrencyPrecision.d.ts'
import type { FractionPrecision } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/FractionPrecision.d.ts'
import type { Precision } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/Precision.d.ts'
import type { Precision$BogusRounder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/Precision$BogusRounder.d.ts'
import type { Currency$CurrencyUsage } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Currency$CurrencyUsage.d.ts'
export class Precision$CurrencyRounderImpl extends CurrencyPrecision {
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
    constructor(usage: Currency$CurrencyUsage)
    // private usage: Currency$CurrencyUsage;
    apply(value: DecimalQuantity): void;
    createCopy(): Precision$CurrencyRounderImpl;
}