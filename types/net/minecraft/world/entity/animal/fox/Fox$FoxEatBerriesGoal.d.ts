import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { MoveToBlockGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/MoveToBlockGoal.d.ts'
import type { LevelReader } from '../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class Fox$FoxEatBerriesGoal extends MoveToBlockGoal {
    constructor(null_: Fox$FoxEatBerriesGoal, speedModifier: number, searchRange: number, verticalSearchRange: number)
    // private ticksWaited: number;
    acceptedDistance(): number;
    canUse(): boolean;
    isValidTarget(level: LevelReader, pos: BlockPos): boolean;
    onReachedTarget(): void;
    // private pickGlowBerry(state: BlockState): void;
    // private pickSweetBerries(state: BlockState): void;
    shouldRecalculatePath(): boolean;
    start(): void;
    tick(): void;
}