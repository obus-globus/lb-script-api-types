import type { DecimalQuantity } from '../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { CurrencyPrecision } from '../../../../com/ibm/icu/number/CurrencyPrecision.d.ts'
import type { FractionPrecision } from '../../../../com/ibm/icu/number/FractionPrecision.d.ts'
import type { Precision } from '../../../../com/ibm/icu/number/Precision.d.ts'
import type { Precision$BogusRounder } from '../../../../com/ibm/icu/number/Precision$BogusRounder.d.ts'
import type { Currency$CurrencyUsage } from '../../../../com/ibm/icu/util/Currency$CurrencyUsage.d.ts'
import type { BigDecimal } from '../../../../java/math/BigDecimal.d.ts'
export class Precision$SignificantRounderImpl extends Precision {
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
    constructor(arg0: number, arg1: number)
    // private maxSig: number;
    // private minSig: number;
    apply(arg0: DecimalQuantity): void;
    apply(arg0: DecimalQuantity, arg1: number): void;
    createCopy(): Precision$SignificantRounderImpl;
}