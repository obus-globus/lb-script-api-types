import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { LevelAccessor } from '../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface UpgradeData$BlockFixer extends Object{
    processChunk(level: LevelAccessor): void;
    updateShape(state: BlockState, direction: Direction, neighbour: BlockState, level: LevelAccessor, pos: BlockPos, neighbourPos: BlockPos): BlockState;
}