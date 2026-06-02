import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Panda } from '../../../../../../net/minecraft/world/entity/animal/panda/Panda.d.ts'
export class Panda$PandaRollGoal extends Goal {
    constructor(panda: Panda)
    // private panda: Panda;
    canContinueToUse(): boolean;
    canUse(): boolean;
    isInterruptable(): boolean;
    start(): void;
}