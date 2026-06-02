import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { IronGolem } from '../../../../../../net/minecraft/world/entity/animal/golem/IronGolem.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
export class OfferFlowerGoal extends Goal {
    static OFFER_TICKS: number;
    constructor(golem: IronGolem)
    // private entity: LivingEntity;
    // private golem: IronGolem;
    // private tick: number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    // private getGolemBoundingBox(): AABB;
    start(): void;
    stop(): void;
    tick(): void;
}