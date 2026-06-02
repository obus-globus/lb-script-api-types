import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { TargetGoal } from '../../../../../../../net/minecraft/world/entity/ai/goal/target/TargetGoal.d.ts'
import type { TargetingConditions } from '../../../../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions.d.ts'
import type { IronGolem } from '../../../../../../../net/minecraft/world/entity/animal/golem/IronGolem.d.ts'
export class DefendVillageTargetGoal extends TargetGoal {
    constructor(golem: IronGolem)
    // private attackTargeting: TargetingConditions;
    // private golem: IronGolem;
    // private potentialTarget: LivingEntity;
    canUse(): boolean;
    start(): void;
}