import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
export class StrollThroughVillageGoal extends Goal {
    constructor(mob: PathfinderMob, interval: number)
    // private interval: number;
    // private mob: PathfinderMob;
    // private wantedPos: BlockPos;
    canContinueToUse(): boolean;
    canUse(): boolean;
    // private moveRandomly(): void;
    tick(): void;
}