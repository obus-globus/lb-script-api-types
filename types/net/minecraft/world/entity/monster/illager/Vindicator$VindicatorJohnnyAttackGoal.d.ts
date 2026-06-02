import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { NearestAttackableTargetGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/target/NearestAttackableTargetGoal.d.ts'
import type { Vindicator } from '../../../../../../net/minecraft/world/entity/monster/illager/Vindicator.d.ts'
export class Vindicator$VindicatorJohnnyAttackGoal extends NearestAttackableTargetGoal<LivingEntity> {
    constructor(mob: Vindicator)
    canUse(): boolean;
    start(): void;
}