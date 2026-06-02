import type { BigDecimal } from '../../../../../../../../java/math/BigDecimal.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ConversionRates } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/ConversionRates.d.ts'
import type { MeasureUnitImpl } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/MeasureUnitImpl.d.ts'
import type { UnitsConverter$ConversionInfo } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/UnitsConverter$ConversionInfo.d.ts'
import type { UnitsConverter$Convertibility } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/UnitsConverter$Convertibility.d.ts'
export class UnitsConverter extends Object {
    static extractConvertibility(paramsource: MeasureUnitImpl, paramtarget: MeasureUnitImpl, paramconversionRates: ConversionRates): UnitsConverter$Convertibility;
    constructor(sourceIdentifier: string, targetIdentifier: string)
    constructor(source: MeasureUnitImpl, target: MeasureUnitImpl, conversionRates: ConversionRates)
    // private conversionRate: BigDecimal;
    // private offset: BigDecimal;
    // private reciprocal: boolean;
    // private specialSource: string;
    // private specialTarget: string;
    // private baseToScale(baseValue: BigDecimal, minBaseForScaleValues: BigDecimal[]): BigDecimal;
    convert(inputValue: BigDecimal): BigDecimal;
    convertInverse(inputValue: BigDecimal): BigDecimal;
    getConversionInfo(): UnitsConverter$ConversionInfo;
    // private scaleToBase(scaleValue: BigDecimal, minBaseForScaleValues: BigDecimal[]): BigDecimal;
    toString(): string;
}