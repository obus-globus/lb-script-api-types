import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Orientation } from '../../../../../net/minecraft/world/level/redstone/Orientation.d.ts'
export interface NeighborUpdater extends Object{
    neighborChanged(pos: BlockPos, changedBlock: Block, orientation: Orientation): void;
    neighborChanged(state: BlockState, pos: BlockPos, changedBlock: Block, orientation: Orientation, movedByPiston: boolean): void;
    shapeUpdate(direction: Direction, neighborState: BlockState, pos: BlockPos, neighborPos: BlockPos, updateFlags: number, updateLimit: number): void;
    updateNeighborsAtExceptFromFacing(pos: BlockPos, block: Block, skipDirection: Direction, orientation: Orientation): void;
}