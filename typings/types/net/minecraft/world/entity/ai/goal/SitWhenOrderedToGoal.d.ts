import type { TamableAnimal } from '../../../../../../net/minecraft/world/entity/TamableAnimal.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
export class SitWhenOrderedToGoal extends Goal {
    constructor(mob: TamableAnimal)
    // private mob: TamableAnimal;
    canContinueToUse(): boolean;
    canUse(): boolean;
    start(): void;
    stop(): void;
}