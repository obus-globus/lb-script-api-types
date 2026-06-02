import type { BigDecimal } from '../../../../../../../../java/math/BigDecimal.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ConversionRates$ConversionRateInfo } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/ConversionRates$ConversionRateInfo.d.ts'
import type { MeasureUnitImpl } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/MeasureUnitImpl.d.ts'
import type { SingleUnitImpl } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/SingleUnitImpl.d.ts'
import type { UnitsConverter$Convertibility } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/UnitsConverter$Convertibility.d.ts'
import type { UnitsConverter$Factor } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/UnitsConverter$Factor.d.ts'
export class ConversionRates extends Object {
    constructor()
    // private mapToConversionRate: { [key: string]: ConversionRates$ConversionRateInfo };
    // private checkSimpleUnit(measureUnitImpl: MeasureUnitImpl): boolean;
    extractBaseUnits(measureUnitImpl: MeasureUnitImpl): SingleUnitImpl[];
    extractBaseUnits(singleUnit: SingleUnitImpl): SingleUnitImpl[];
    extractCompoundBaseUnit(measureUnit: MeasureUnitImpl): MeasureUnitImpl;
    extractSystems(singleUnit: SingleUnitImpl): string;
    getFactorToBase(measureUnit: MeasureUnitImpl): UnitsConverter$Factor;
    // private getFactorToBase(singleUnit: SingleUnitImpl): UnitsConverter$Factor;
    getOffset(source: MeasureUnitImpl, target: MeasureUnitImpl, sourceToBase: UnitsConverter$Factor, targetToBase: UnitsConverter$Factor, convertibility: UnitsConverter$Convertibility): BigDecimal;
    getSpecialMappingName(simpleUnit: MeasureUnitImpl): string;
}