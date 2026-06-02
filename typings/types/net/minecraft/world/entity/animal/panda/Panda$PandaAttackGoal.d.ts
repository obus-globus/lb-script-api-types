import type { MeleeAttackGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/MeleeAttackGoal.d.ts'
import type { Panda } from '../../../../../../net/minecraft/world/entity/animal/panda/Panda.d.ts'
export class Panda$PandaAttackGoal extends MeleeAttackGoal {
    constructor(mob: Panda, speedModifier: number, trackTarget: boolean)
    // private panda: Panda;
    canUse(): boolean;
}