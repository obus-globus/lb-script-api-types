import type { BigDecimal } from '../../../../../../../../java/math/BigDecimal.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ComplexUnitsConverter } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/ComplexUnitsConverter.d.ts'
import type { ConversionRates } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/ConversionRates.d.ts'
import type { MeasureUnitImpl } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/MeasureUnitImpl.d.ts'
export class UnitsRouter$ConverterPreference extends Object {
    constructor(source: MeasureUnitImpl, targetUnit: MeasureUnitImpl, limit: BigDecimal, precision: string, conversionRates: ConversionRates)
    constructor(source: MeasureUnitImpl, targetUnit: MeasureUnitImpl, precision: string, conversionRates: ConversionRates)
    // private converter: ComplexUnitsConverter;
    // private limit: BigDecimal;
    // private precision: string;
    // private targetUnit: MeasureUnitImpl;
}