import type { DecimalQuantity } from '../../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { MicroProps } from '../../../../../com/ibm/icu/impl/number/MicroProps.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface LongNameMultiplexer$ParentlessMicroPropsGenerator extends Object{
    processQuantityWithMicros(arg0: DecimalQuantity, arg1: MicroProps): MicroProps;
}