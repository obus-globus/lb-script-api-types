import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TagKey } from '../../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Fluid } from '../../../../../../../net/minecraft/world/level/material/Fluid.d.ts'
export interface MixinEntityFluidInteractionAccessor extends Object{
    trackerByFluid(): Map<TagKey<Fluid>, Object>;
}