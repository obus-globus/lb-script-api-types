import type { PanicGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/PanicGoal.d.ts'
import type { Panda } from '../../../../../../net/minecraft/world/entity/animal/panda/Panda.d.ts'
export class Panda$PandaPanicGoal extends PanicGoal {
    static WATER_CHECK_DISTANCE_VERTICAL: number;
    constructor(mob: Panda, speedModifier: number)
    // private panda: Panda;
    canContinueToUse(): boolean;
}