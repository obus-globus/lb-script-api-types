import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MixinEntityFluidInteractionTrackerAccessor } from '../../../../net/ccbluex/liquidbounce/injection/mixins/minecraft/entity/MixinEntityFluidInteractionTrackerAccessor.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EntityFluidInteraction$Tracker extends Object implements MixinEntityFluidInteractionTrackerAccessor {
    private constructor()
    // private accumulatedCurrent: Vec3;
    // private currentCount: number;
    // private eyesInside: boolean;
    // private height: number;
    accumulateCurrent(flow: Vec3): void;
    applyCurrentTo(entity: Entity, scale: number): void;
    reset(): void;
}