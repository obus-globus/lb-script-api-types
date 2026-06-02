import type { BooleanSupplier } from '../../../io/netty/util/BooleanSupplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface UncheckedBooleanSupplier extends BooleanSupplier, Object{
    get(): boolean;
}