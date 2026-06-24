import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ComplexUnitsConverter$ComplexConverterResult } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/ComplexUnitsConverter$ComplexConverterResult.d.ts'
import type { MeasureUnitImpl } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/MeasureUnitImpl.d.ts'
import type { UnitsRouter } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/UnitsRouter.d.ts'
export class UnitsRouter$RouteResult extends Object {
    constructor(null_: UnitsRouter, complexConverterResult: ComplexUnitsConverter$ComplexConverterResult, outputUnit: MeasureUnitImpl)
    complexConverterResult: ComplexUnitsConverter$ComplexConverterResult;
    outputUnit: MeasureUnitImpl;
}