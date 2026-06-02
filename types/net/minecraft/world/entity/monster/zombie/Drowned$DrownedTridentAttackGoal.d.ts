import type { RangedAttackGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/RangedAttackGoal.d.ts'
import type { RangedAttackMob } from '../../../../../../net/minecraft/world/entity/monster/RangedAttackMob.d.ts'
import type { Drowned } from '../../../../../../net/minecraft/world/entity/monster/zombie/Drowned.d.ts'
export class Drowned$DrownedTridentAttackGoal extends RangedAttackGoal {
    constructor(mob: RangedAttackMob, speedModifier: number, attackInterval: number, attackRadius: number)
    // private drowned: Drowned;
    canUse(): boolean;
    start(): void;
    stop(): void;
}