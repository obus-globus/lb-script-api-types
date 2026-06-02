import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Drowned } from '../../../../../../net/minecraft/world/entity/monster/zombie/Drowned.d.ts'
export class Drowned$DrownedSwimUpGoal extends Goal {
    constructor(drowned: Drowned, speedModifier: number, seaLevel: number)
    // private drowned: Drowned;
    // private seaLevel: number;
    // private speedModifier: number;
    // private stuck: boolean;
    canContinueToUse(): boolean;
    canUse(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}