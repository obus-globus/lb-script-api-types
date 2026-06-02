import type { DecimalQuantity } from '../../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { MicroProps } from '../../../../../com/ibm/icu/impl/number/MicroProps.d.ts'
import type { MicroPropsGenerator } from '../../../../../com/ibm/icu/impl/number/MicroPropsGenerator.d.ts'
import type { Scale } from '../../../../../com/ibm/icu/number/Scale.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MultiplierFormatHandler extends Object implements MicroPropsGenerator {
    constructor(arg0: Scale, arg1: MicroPropsGenerator)
    // private multiplier: Scale;
    // private parent: MicroPropsGenerator;
    processQuantity(arg0: DecimalQuantity): MicroProps;
}