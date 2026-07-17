import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ConversionRates$ConversionRateInfo } from '../../../../../com/ibm/icu/impl/units/ConversionRates$ConversionRateInfo.d.ts'
import type { MeasureUnitImpl } from '../../../../../com/ibm/icu/impl/units/MeasureUnitImpl.d.ts'
import type { SingleUnitImpl } from '../../../../../com/ibm/icu/impl/units/SingleUnitImpl.d.ts'
import type { UnitsConverter$Convertibility } from '../../../../../com/ibm/icu/impl/units/UnitsConverter$Convertibility.d.ts'
import type { UnitsConverter$Factor } from '../../../../../com/ibm/icu/impl/units/UnitsConverter$Factor.d.ts'
import type { BigDecimal } from '../../../../../java/math/BigDecimal.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ConversionRates extends Object {
    constructor()
    // private mapToConversionRate: JavaMap<string, ConversionRates$ConversionRateInfo>;
    // private checkSimpleUnit(arg0: MeasureUnitImpl): boolean;
    extractBaseUnits(arg0: MeasureUnitImpl): SingleUnitImpl[];
    extractBaseUnits(arg0: SingleUnitImpl): SingleUnitImpl[];
    extractCompoundBaseUnit(arg0: MeasureUnitImpl): MeasureUnitImpl;
    extractSystems(arg0: SingleUnitImpl): string;
    getFactorToBase(arg0: MeasureUnitImpl): UnitsConverter$Factor;
    // private getFactorToBase(arg0: SingleUnitImpl): UnitsConverter$Factor;
    getOffset(arg0: MeasureUnitImpl, arg1: MeasureUnitImpl, arg2: UnitsConverter$Factor, arg3: UnitsConverter$Factor, arg4: UnitsConverter$Convertibility): BigDecimal;
    getSpecialMappingName(arg0: MeasureUnitImpl): string;
}