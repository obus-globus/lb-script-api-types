import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DecimalQuantity } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { MicroProps } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroProps.d.ts'
import type { MicroPropsGenerator } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroPropsGenerator.d.ts'
import type { UnitsRouter } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/UnitsRouter.d.ts'
import type { MeasureUnit } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/MeasureUnit.d.ts'
import type { ULocale } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class UsagePrefsHandler extends Object implements MicroPropsGenerator {
    constructor(locale: ULocale, inputUnit: MeasureUnit, usage: string, parent: MicroPropsGenerator)
    // private fParent: MicroPropsGenerator;
    // private fUnitsRouter: UnitsRouter;
    getOutputUnits(): MeasureUnit[];
    processQuantity(quantity: DecimalQuantity): MicroProps;
}