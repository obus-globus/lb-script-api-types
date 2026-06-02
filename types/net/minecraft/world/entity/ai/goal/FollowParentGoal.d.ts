import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Animal } from '../../../../../../net/minecraft/world/entity/animal/Animal.d.ts'
export class FollowParentGoal extends Goal {
    static DONT_FOLLOW_IF_CLOSER_THAN: number;
    static HORIZONTAL_SCAN_RANGE: number;
    static VERTICAL_SCAN_RANGE: number;
    constructor(animal: Animal, speedModifier: number)
    // private animal: Animal;
    // private parent: Animal;
    // private speedModifier: number;
    // private timeToRecalcPath: number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}