import type { ConversionRates } from '../../../../../com/ibm/icu/impl/units/ConversionRates.d.ts'
import type { MeasureUnitImpl } from '../../../../../com/ibm/icu/impl/units/MeasureUnitImpl.d.ts'
import type { UnitsConverter$ConversionInfo } from '../../../../../com/ibm/icu/impl/units/UnitsConverter$ConversionInfo.d.ts'
import type { UnitsConverter$Convertibility } from '../../../../../com/ibm/icu/impl/units/UnitsConverter$Convertibility.d.ts'
import type { BigDecimal } from '../../../../../java/math/BigDecimal.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UnitsConverter extends Object {
    static extractConvertibility(paramarg0: MeasureUnitImpl, paramarg1: MeasureUnitImpl, paramarg2: ConversionRates): UnitsConverter$Convertibility;
    constructor(arg0: MeasureUnitImpl, arg1: MeasureUnitImpl, arg2: ConversionRates)
    constructor(arg0: string, arg1: string)
    // private conversionRate: BigDecimal;
    // private offset: BigDecimal;
    // private reciprocal: boolean;
    // private specialSource: string;
    // private specialTarget: string;
    // private baseToScale(arg0: BigDecimal, arg1: BigDecimal[]): BigDecimal;
    convert(arg0: BigDecimal): BigDecimal;
    convertInverse(arg0: BigDecimal): BigDecimal;
    getConversionInfo(): UnitsConverter$ConversionInfo;
    // private scaleToBase(arg0: BigDecimal, arg1: BigDecimal[]): BigDecimal;
    toString(): string;
}