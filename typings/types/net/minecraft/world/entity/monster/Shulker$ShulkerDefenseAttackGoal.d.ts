import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { NearestAttackableTargetGoal } from '../../../../../net/minecraft/world/entity/ai/goal/target/NearestAttackableTargetGoal.d.ts'
import type { Shulker } from '../../../../../net/minecraft/world/entity/monster/Shulker.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
export class Shulker$ShulkerDefenseAttackGoal extends NearestAttackableTargetGoal<LivingEntity> {
    constructor(mob: Shulker)
    canUse(): boolean;
    getTargetSearchArea(followDistance: number): AABB;
}