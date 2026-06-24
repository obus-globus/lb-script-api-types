import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { CollectingNeighborUpdater$NeighborUpdates } from '../../../../../net/minecraft/world/level/redstone/CollectingNeighborUpdater$NeighborUpdates.d.ts'
import type { Orientation } from '../../../../../net/minecraft/world/level/redstone/Orientation.d.ts'
export class CollectingNeighborUpdater$SimpleNeighborUpdate extends Record implements CollectingNeighborUpdater$NeighborUpdates {
    private constructor(pos: BlockPos, block: Block, orientation: Orientation)
    // private block: Block;
    // private orientation: Orientation;
    // private pos: BlockPos;
    block(): Block;
    equals(o: Object | null): boolean;
    forEachUpdatedPos(output: (param0: BlockPos) => void): void;
    hashCode(): number;
    orientation(): Orientation;
    pos(): BlockPos;
    runNext(level: Level): boolean;
    toString(): string;
}