import type { IntSupplier } from '../../../io/netty/util/IntSupplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface SelectStrategy extends Object{
    calculateStrategy(arg0: IntSupplier, arg1: boolean): number;
}