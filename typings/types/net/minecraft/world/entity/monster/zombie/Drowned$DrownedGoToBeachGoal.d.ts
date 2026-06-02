import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { MoveToBlockGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/MoveToBlockGoal.d.ts'
import type { Drowned } from '../../../../../../net/minecraft/world/entity/monster/zombie/Drowned.d.ts'
import type { LevelReader } from '../../../../../../net/minecraft/world/level/LevelReader.d.ts'
export class Drowned$DrownedGoToBeachGoal extends MoveToBlockGoal {
    constructor(drowned: Drowned, speedModifier: number)
    // private drowned: Drowned;
    canContinueToUse(): boolean;
    canUse(): boolean;
    isValidTarget(level: LevelReader, pos: BlockPos): boolean;
    start(): void;
    stop(): void;
}