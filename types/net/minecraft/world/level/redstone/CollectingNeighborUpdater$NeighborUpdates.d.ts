import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export interface CollectingNeighborUpdater$NeighborUpdates extends Object{
    forEachUpdatedPos(output: (param0: BlockPos) => void): void;
    runNext(level: Level): boolean;
}