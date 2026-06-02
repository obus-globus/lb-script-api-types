import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Fluid } from '../../../../../net/minecraft/world/level/material/Fluid.d.ts'
export interface BucketItemAccessor extends Object{
    fabric_getContent(): Fluid;
}