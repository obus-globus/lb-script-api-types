import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DecimalQuantity } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { MicroProps } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroProps.d.ts'
import type { MicroPropsGenerator } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroPropsGenerator.d.ts'
import type { Scale } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/Scale.d.ts'
export class MultiplierFormatHandler extends Object implements MicroPropsGenerator {
    constructor(multiplier: Scale, parent: MicroPropsGenerator)
    // private multiplier: Scale;
    // private parent: MicroPropsGenerator;
    processQuantity(quantity: DecimalQuantity): MicroProps;
}