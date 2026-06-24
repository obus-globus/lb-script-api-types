import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { MeleeAttackGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/MeleeAttackGoal.d.ts'
import type { Bee } from '../../../../../../net/minecraft/world/entity/animal/bee/Bee.d.ts'
export class Bee$BeeAttackGoal extends MeleeAttackGoal {
    constructor(null_: Bee, mob: PathfinderMob, speedModifier: number, trackTarget: boolean)
    canContinueToUse(): boolean;
    canUse(): boolean;
}