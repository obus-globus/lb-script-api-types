import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelAccessor } from '../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { NeighborUpdater } from '../../../../../net/minecraft/world/level/redstone/NeighborUpdater.d.ts'
import type { Orientation } from '../../../../../net/minecraft/world/level/redstone/Orientation.d.ts'
export class InstantNeighborUpdater extends Object implements NeighborUpdater {
    static UPDATE_ORDER: Direction[];
    static executeShapeUpdate(paramlevel: LevelAccessor, paramdirection: Direction, parampos: BlockPos, paramneighborPos: BlockPos, paramneighborState: BlockState, paramupdateFlags: number, paramupdateLimit: number): void;
    static executeUpdate(paramlevel: Level, paramstate: BlockState, parampos: BlockPos, paramchangedBlock: Block, paramorientation: Orientation, parammovedByPiston: boolean): void;
    constructor(level: Level)
    // private level: Level;
    neighborChanged(pos: BlockPos, changedBlock: Block, orientation: Orientation): void;
    neighborChanged(state: BlockState, pos: BlockPos, changedBlock: Block, orientation: Orientation, movedByPiston: boolean): void;
    shapeUpdate(direction: Direction, neighborState: BlockState, pos: BlockPos, neighborPos: BlockPos, updateFlags: number, updateLimit: number): void;
    updateNeighborsAtExceptFromFacing(pos: BlockPos, block: Block, skipDirection: Direction, orientation: Orientation): void;
}