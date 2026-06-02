import type { LithiumMoveToBlockGoal } from '../../../../../../net/caffeinemc/mods/lithium/common/ai/non_poi_block_search/LithiumMoveToBlockGoal.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { MoveToBlockGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/MoveToBlockGoal.d.ts'
import type { BlockGetter } from '../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelAccessor } from '../../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { LevelReader } from '../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class RemoveBlockGoal extends MoveToBlockGoal implements LithiumMoveToBlockGoal {
    constructor(blockToRemove: Block, mob: PathfinderMob, speedModifier: number, verticalSearchRange: number)
    // private blockToRemove: Block;
    // private removerMob: Mob;
    // private ticksSinceReachedGoal: number;
    canUse(): boolean;
    // private getPosWithBlock(pos: BlockPos, level: BlockGetter): BlockPos;
    isValidTarget(level: LevelReader, pos: BlockPos): boolean;
    // private lithium$isValidTargetBlock(arg0: BlockState): boolean;
    playBreakSound(level: Level, pos: BlockPos): void;
    playDestroyProgressSound(level: LevelAccessor, pos: BlockPos): void;
    start(): void;
    stop(): void;
    tick(): void;
}