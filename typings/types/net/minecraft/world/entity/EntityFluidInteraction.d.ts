import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MixinEntityFluidInteractionAccessor } from '../../../../net/ccbluex/liquidbounce/injection/mixins/minecraft/entity/MixinEntityFluidInteractionAccessor.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityFluidInteraction$Tracker } from '../../../../net/minecraft/world/entity/EntityFluidInteraction$Tracker.d.ts'
import type { Fluid } from '../../../../net/minecraft/world/level/material/Fluid.d.ts'
export class EntityFluidInteraction extends Object implements MixinEntityFluidInteractionAccessor {
    constructor(fluids: TagKey<Fluid>[])
    // private trackerByFluid: JavaMap<TagKey<Fluid>, EntityFluidInteraction$Tracker>;
    applyCurrentTo(fluid: TagKey<Fluid>, entity: Entity, scale: number): void;
    getFluidHeight(fluid: TagKey<Fluid>): number;
    // private getTrackerFor(fluid: Fluid): EntityFluidInteraction$Tracker;
    isEyeInFluid(fluid: TagKey<Fluid>): boolean;
    isInFluid(fluid: TagKey<Fluid>): boolean;
    update(entity: Entity, ignoreCurrent: boolean): void;
}