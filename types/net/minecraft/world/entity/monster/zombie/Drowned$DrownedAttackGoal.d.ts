import type { ZombieAttackGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/ZombieAttackGoal.d.ts'
import type { Drowned } from '../../../../../../net/minecraft/world/entity/monster/zombie/Drowned.d.ts'
export class Drowned$DrownedAttackGoal extends ZombieAttackGoal {
    constructor(drowned: Drowned, speedModifier: number, trackTarget: boolean)
    // private drowned: Drowned;
    canContinueToUse(): boolean;
    canUse(): boolean;
}