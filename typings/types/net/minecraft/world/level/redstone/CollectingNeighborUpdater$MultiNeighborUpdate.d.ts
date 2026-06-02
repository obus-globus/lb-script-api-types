import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { CollectingNeighborUpdater$NeighborUpdates } from '../../../../../net/minecraft/world/level/redstone/CollectingNeighborUpdater$NeighborUpdates.d.ts'
import type { Orientation } from '../../../../../net/minecraft/world/level/redstone/Orientation.d.ts'
export class CollectingNeighborUpdater$MultiNeighborUpdate extends Object implements CollectingNeighborUpdater$NeighborUpdates {
    constructor(sourcePos: BlockPos, sourceBlock: Block, orientation: Orientation, skipDirection: Direction)
    // private idx: number;
    // private orientation: Orientation;
    // private skipDirection: Direction;
    // private sourceBlock: Block;
    // private sourcePos: BlockPos;
    forEachUpdatedPos(output: (param0: BlockPos) => void): void;
    runNext(level: Level): boolean;
}