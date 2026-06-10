import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TransferVariant } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/storage/TransferVariant.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { DataComponentPatch } from '../../../../../../../net/minecraft/core/component/DataComponentPatch.d.ts'
import type { Fluid } from '../../../../../../../net/minecraft/world/level/material/Fluid.d.ts'
export interface FluidVariant extends Object, TransferVariant<Fluid>{
    componentsMatch(arg0: DataComponentPatch): boolean;
    getFluid(): Fluid;
    hasComponents(): boolean;
    isOf(arg0: Fluid): boolean;
    typeHolder(): Holder<Fluid>;
    withComponents(arg0: DataComponentPatch): FluidVariant;
    withComponents(arg0: DataComponentPatch): TransferVariant<Fluid>;
}