import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FluidVariant } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/fluid/FluidVariant.d.ts'
export interface FluidVariantCache extends Object{
    fabric_getCachedFluidVariant(): FluidVariant;
}