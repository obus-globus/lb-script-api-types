import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FluidBehavior } from '../../../../../../net/fabricmc/fabric/api/registry/fluid/FluidBehavior.d.ts'
import type { TagKey } from '../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Fluid } from '../../../../../../net/minecraft/world/level/material/Fluid.d.ts'
export class EntityFluidInteractionRegistry extends Object {
    static getCustomInteractableFluids(): E[];
    static getFluidBehavior(paramarg0: TagKey<Fluid>): FluidBehavior;
    static register(paramarg0: TagKey<Fluid>, paramarg1: FluidBehavior): void;
    private constructor()
}