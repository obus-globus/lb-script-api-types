import type { NearestAttackableTargetGoal } from '../../../../../net/minecraft/world/entity/ai/goal/target/NearestAttackableTargetGoal.d.ts'
import type { Shulker } from '../../../../../net/minecraft/world/entity/monster/Shulker.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
export class Shulker$ShulkerNearestAttackGoal extends NearestAttackableTargetGoal<Player> {
    constructor(null_: Shulker$ShulkerNearestAttackGoal, mob: Shulker)
    canUse(): boolean;
    getTargetSearchArea(followDistance: number): AABB;
}