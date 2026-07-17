import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { CollectingNeighborUpdater$NeighborUpdates } from '../../../../../net/minecraft/world/level/redstone/CollectingNeighborUpdater$NeighborUpdates.d.ts'
import type { NeighborUpdater } from '../../../../../net/minecraft/world/level/redstone/NeighborUpdater.d.ts'
import type { Orientation } from '../../../../../net/minecraft/world/level/redstone/Orientation.d.ts'
export class CollectingNeighborUpdater extends Object implements NeighborUpdater {
    static UPDATE_ORDER: Direction[];
    constructor(level: Level, maxChainedNeighborUpdates: number)
    // private addedThisLayer: CollectingNeighborUpdater$NeighborUpdates[];
    // private count: number;
    readonly debugListener: (param0: BlockPos) => void;
    // private level: Level;
    // private maxChainedNeighborUpdates: number;
    // private stack: CollectingNeighborUpdater$NeighborUpdates[];
    // private addAndRun(pos: BlockPos, update: CollectingNeighborUpdater$NeighborUpdates): void;
    neighborChanged(pos: BlockPos, block: Block, orientation: Orientation): void;
    neighborChanged(state: BlockState, pos: BlockPos, block: Block, orientation: Orientation, movedByPiston: boolean): void;
    // private runUpdates(): void;
    setDebugListener(debugListener: (param0: BlockPos) => void): void;
    shapeUpdate(direction: Direction, neighborState: BlockState, pos: BlockPos, neighborPos: BlockPos, updateFlags: number, updateLimit: number): void;
    updateNeighborsAtExceptFromFacing(pos: BlockPos, block: Block, skipDirection: Direction, orientation: Orientation): void;
}