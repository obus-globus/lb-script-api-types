import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { CollectingNeighborUpdater$NeighborUpdates } from '../../../../../net/minecraft/world/level/redstone/CollectingNeighborUpdater$NeighborUpdates.d.ts'
export class CollectingNeighborUpdater$ShapeUpdate extends Record implements CollectingNeighborUpdater$NeighborUpdates {
    private constructor(direction: Direction, neighborState: BlockState, pos: BlockPos, neighborPos: BlockPos, updateFlags: number, updateLimit: number)
    // private direction: Direction;
    // private neighborPos: BlockPos;
    // private neighborState: BlockState;
    // private pos: BlockPos;
    // private updateFlags: number;
    // private updateLimit: number;
    direction(): Direction;
    equals(o: Object | null): boolean;
    forEachUpdatedPos(output: (param0: BlockPos) => void): void;
    hashCode(): number;
    neighborPos(): BlockPos;
    neighborState(): BlockState;
    pos(): BlockPos;
    runNext(level: Level): boolean;
    toString(): string;
    updateFlags(): number;
    updateLimit(): number;
}