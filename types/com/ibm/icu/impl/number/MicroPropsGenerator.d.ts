import type { DecimalQuantity } from '../../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { MicroProps } from '../../../../../com/ibm/icu/impl/number/MicroProps.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface MicroPropsGenerator extends Object{
    processQuantity(arg0: DecimalQuantity): MicroProps;
}