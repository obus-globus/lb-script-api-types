import type { MicroProps } from '../../../../../com/ibm/icu/impl/number/MicroProps.d.ts'
import type { MeasureUnitImpl } from '../../../../../com/ibm/icu/impl/units/MeasureUnitImpl.d.ts'
import type { UnitsRouter$ConverterPreference } from '../../../../../com/ibm/icu/impl/units/UnitsRouter$ConverterPreference.d.ts'
import type { UnitsRouter$RouteResult } from '../../../../../com/ibm/icu/impl/units/UnitsRouter$RouteResult.d.ts'
import type { MeasureUnit } from '../../../../../com/ibm/icu/util/MeasureUnit.d.ts'
import type { ULocale } from '../../../../../com/ibm/icu/util/ULocale.d.ts'
import type { BigDecimal } from '../../../../../java/math/BigDecimal.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UnitsRouter extends Object {
    constructor(arg0: MeasureUnitImpl, arg1: ULocale, arg2: string)
    constructor(arg0: string, arg1: ULocale, arg2: string)
    // private converterPreferences_: UnitsRouter$ConverterPreference[];
    // private outputUnits_: MeasureUnit[];
    getOutputUnits(): MeasureUnit[];
    route(arg0: BigDecimal, arg1: MicroProps): UnitsRouter$RouteResult;
}