import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { CollectingNeighborUpdater$NeighborUpdates } from '../../../../../net/minecraft/world/level/redstone/CollectingNeighborUpdater$NeighborUpdates.d.ts'
import type { Orientation } from '../../../../../net/minecraft/world/level/redstone/Orientation.d.ts'
export class CollectingNeighborUpdater$FullNeighborUpdate extends Record implements CollectingNeighborUpdater$NeighborUpdates {
    private constructor(state: BlockState, pos: BlockPos, block: Block, orientation: Orientation, movedByPiston: boolean)
    // private block: Block;
    // private movedByPiston: boolean;
    // private orientation: Orientation;
    // private pos: BlockPos;
    // private state: BlockState;
    block(): Block;
    equals(o: Object | null): boolean;
    forEachUpdatedPos(output: (param0: BlockPos) => void): void;
    hashCode(): number;
    movedByPiston(): boolean;
    orientation(): Orientation;
    pos(): BlockPos;
    runNext(level: Level): boolean;
    state(): BlockState;
    toString(): string;
}