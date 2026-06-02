import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DecimalQuantity } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { MicroProps } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroProps.d.ts'
import type { MicroPropsGenerator } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroPropsGenerator.d.ts'
import type { ComplexUnitsConverter } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/ComplexUnitsConverter.d.ts'
import type { MeasureUnit } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/MeasureUnit.d.ts'
export class UnitConversionHandler extends Object implements MicroPropsGenerator {
    constructor(targetUnit: MeasureUnit, parent: MicroPropsGenerator)
    // private fComplexUnitConverter: ComplexUnitsConverter;
    // private fOutputUnit: MeasureUnit;
    // private fParent: MicroPropsGenerator;
    processQuantity(quantity: DecimalQuantity): MicroProps;
}