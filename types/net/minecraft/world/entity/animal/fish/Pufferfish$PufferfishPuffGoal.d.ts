import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Pufferfish } from '../../../../../../net/minecraft/world/entity/animal/fish/Pufferfish.d.ts'
export class Pufferfish$PufferfishPuffGoal extends Goal {
    constructor(fish: Pufferfish)
    // private fish: Pufferfish;
    canUse(): boolean;
    start(): void;
    stop(): void;
}