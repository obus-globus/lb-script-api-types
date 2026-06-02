import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { AbstractHorse } from '../../../../../../net/minecraft/world/entity/animal/equine/AbstractHorse.d.ts'
export class RandomStandGoal extends Goal {
    constructor(horse: AbstractHorse)
    // private horse: AbstractHorse;
    // private nextStand: number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    // private playStandSound(): void;
    requiresUpdateEveryTick(): boolean;
    // private resetStandInterval(horse: AbstractHorse): void;
    start(): void;
}