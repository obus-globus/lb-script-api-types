import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { AbstractHorse } from '../../../../../../net/minecraft/world/entity/animal/equine/AbstractHorse.d.ts'
export class RunAroundLikeCrazyGoal extends Goal {
    constructor(mob: AbstractHorse, speedModifier: number)
    // private horse: AbstractHorse;
    // private posX: number;
    // private posY: number;
    // private posZ: number;
    // private speedModifier: number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    start(): void;
    tick(): void;
}