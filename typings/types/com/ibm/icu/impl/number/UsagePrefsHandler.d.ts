import type { DecimalQuantity } from '../../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { MicroProps } from '../../../../../com/ibm/icu/impl/number/MicroProps.d.ts'
import type { MicroPropsGenerator } from '../../../../../com/ibm/icu/impl/number/MicroPropsGenerator.d.ts'
import type { UnitsRouter } from '../../../../../com/ibm/icu/impl/units/UnitsRouter.d.ts'
import type { MeasureUnit } from '../../../../../com/ibm/icu/util/MeasureUnit.d.ts'
import type { ULocale } from '../../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UsagePrefsHandler extends Object implements MicroPropsGenerator {
    constructor(arg0: ULocale, arg1: MeasureUnit, arg2: string, arg3: MicroPropsGenerator)
    // private fParent: MicroPropsGenerator;
    // private fUnitsRouter: UnitsRouter;
    getOutputUnits(): MeasureUnit[];
    processQuantity(arg0: DecimalQuantity): MicroProps;
}