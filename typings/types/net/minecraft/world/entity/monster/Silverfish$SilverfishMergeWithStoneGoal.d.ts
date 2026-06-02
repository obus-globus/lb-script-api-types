import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { RandomStrollGoal } from '../../../../../net/minecraft/world/entity/ai/goal/RandomStrollGoal.d.ts'
import type { Silverfish } from '../../../../../net/minecraft/world/entity/monster/Silverfish.d.ts'
export class Silverfish$SilverfishMergeWithStoneGoal extends RandomStrollGoal {
    static DEFAULT_INTERVAL: number;
    constructor(silverfish: Silverfish)
    // private doMerge: boolean;
    // private selectedDirection: Direction;
    canContinueToUse(): boolean;
    canUse(): boolean;
    start(): void;
}