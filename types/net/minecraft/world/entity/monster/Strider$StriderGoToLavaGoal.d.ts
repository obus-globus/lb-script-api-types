import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { MoveToBlockGoal } from '../../../../../net/minecraft/world/entity/ai/goal/MoveToBlockGoal.d.ts'
import type { Strider } from '../../../../../net/minecraft/world/entity/monster/Strider.d.ts'
import type { LevelReader } from '../../../../../net/minecraft/world/level/LevelReader.d.ts'
export class Strider$StriderGoToLavaGoal extends MoveToBlockGoal {
    private constructor(strider: Strider, speedModifier: number)
    // private strider: Strider;
    canContinueToUse(): boolean;
    canUse(): boolean;
    getMoveToTarget(): BlockPos;
    isValidTarget(level: LevelReader, pos: BlockPos): boolean;
    shouldRecalculatePath(): boolean;
}