import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DecimalQuantity } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { MicroProps } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroProps.d.ts'
export interface LongNameMultiplexer$ParentlessMicroPropsGenerator extends Object{
    processQuantityWithMicros(quantity: DecimalQuantity, micros: MicroProps): MicroProps;
}