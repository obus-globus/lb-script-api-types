import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Panda } from '../../../../../../net/minecraft/world/entity/animal/panda/Panda.d.ts'
export class Panda$PandaLieOnBackGoal extends Goal {
    constructor(panda: Panda)
    // private cooldown: number;
    // private panda: Panda;
    canContinueToUse(): boolean;
    canUse(): boolean;
    start(): void;
    stop(): void;
}