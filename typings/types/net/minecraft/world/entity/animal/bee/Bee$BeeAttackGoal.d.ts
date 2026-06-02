import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { MeleeAttackGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/MeleeAttackGoal.d.ts'
export class Bee$BeeAttackGoal extends MeleeAttackGoal {
    constructor(null_: Bee$BeeAttackGoal, mob: PathfinderMob, speedModifier: number, trackTarget: boolean)
    canContinueToUse(): boolean;
    canUse(): boolean;
}