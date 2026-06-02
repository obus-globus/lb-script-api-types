import type { DecimalQuantity } from '../../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { MicroProps } from '../../../../../com/ibm/icu/impl/number/MicroProps.d.ts'
import type { MicroPropsGenerator } from '../../../../../com/ibm/icu/impl/number/MicroPropsGenerator.d.ts'
import type { ComplexUnitsConverter } from '../../../../../com/ibm/icu/impl/units/ComplexUnitsConverter.d.ts'
import type { MeasureUnit } from '../../../../../com/ibm/icu/util/MeasureUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UnitConversionHandler extends Object implements MicroPropsGenerator {
    constructor(arg0: MeasureUnit, arg1: MicroPropsGenerator)
    // private fComplexUnitConverter: ComplexUnitsConverter;
    // private fOutputUnit: MeasureUnit;
    // private fParent: MicroPropsGenerator;
    processQuantity(arg0: DecimalQuantity): MicroProps;
}