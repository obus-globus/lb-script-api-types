import type { RandomSwimmingGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/RandomSwimmingGoal.d.ts'
import type { AbstractFish } from '../../../../../../net/minecraft/world/entity/animal/fish/AbstractFish.d.ts'
export class AbstractFish$FishSwimGoal extends RandomSwimmingGoal {
    static DEFAULT_INTERVAL: number;
    constructor(fish: AbstractFish)
    // private fish: AbstractFish;
    canUse(): boolean;
}