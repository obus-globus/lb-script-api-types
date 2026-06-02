import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Goal } from '../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Raider } from '../../../../../net/minecraft/world/entity/raid/Raider.d.ts'
export class Raider$RaiderMoveThroughVillageGoal extends Goal {
    constructor(mob: Raider, speedModifier: number, distanceToPoi: number)
    // private distanceToPoi: number;
    // private poiPos: BlockPos;
    // private raider: Raider;
    // private speedModifier: number;
    // private stuck: boolean;
    // private visited: BlockPos[];
    canContinueToUse(): boolean;
    canUse(): boolean;
    // private hasNotVisited(poi: BlockPos): boolean;
    // private hasSuitablePoi(): boolean;
    // private isValidRaid(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
    // private updateVisited(): void;
}