import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Goal } from '../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { EnderMan } from '../../../../../net/minecraft/world/entity/monster/EnderMan.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class EnderMan$EndermanLeaveBlockGoal extends Goal {
    constructor(enderman: EnderMan)
    // private enderman: EnderMan;
    // private canPlaceBlock(level: Level, pos: BlockPos, carried: BlockState, targetState: BlockState, belowState: BlockState, below: BlockPos): boolean;
    canUse(): boolean;
    tick(): void;
}