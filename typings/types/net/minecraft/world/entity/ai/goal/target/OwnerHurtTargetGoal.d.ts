import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { TamableAnimal } from '../../../../../../../net/minecraft/world/entity/TamableAnimal.d.ts'
import type { TargetGoal } from '../../../../../../../net/minecraft/world/entity/ai/goal/target/TargetGoal.d.ts'
export class OwnerHurtTargetGoal extends TargetGoal {
    constructor(tameAnimal: TamableAnimal)
    // private ownerLastHurt: LivingEntity;
    // private tameAnimal: TamableAnimal;
    // private timestamp: number;
    canUse(): boolean;
    start(): void;
}