import type { BigDecimal } from '../../../../../../../../java/math/BigDecimal.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MicroProps } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroProps.d.ts'
import type { MeasureUnitImpl } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/MeasureUnitImpl.d.ts'
import type { UnitsRouter$ConverterPreference } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/UnitsRouter$ConverterPreference.d.ts'
import type { UnitsRouter$RouteResult } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/UnitsRouter$RouteResult.d.ts'
import type { MeasureUnit } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/MeasureUnit.d.ts'
import type { ULocale } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class UnitsRouter extends Object {
    constructor(inputUnitIdentifier: string, locale: ULocale, usage: string)
    constructor(inputUnit: MeasureUnitImpl, locale: ULocale, usage: string)
    // private converterPreferences_: UnitsRouter$ConverterPreference[];
    // private outputUnits_: MeasureUnit[];
    getOutputUnits(): MeasureUnit[];
    route(quantity: BigDecimal, micros: MicroProps): UnitsRouter$RouteResult;
}