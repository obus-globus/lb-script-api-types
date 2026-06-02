import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { BitStorage } from '../../../../../net/minecraft/util/BitStorage.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { LevelHeightAccessor } from '../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ChunkAccess } from '../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
export class ChunkSkyLightSources extends Object {
    static NEGATIVE_INFINITY: number;
    constructor(level: LevelHeightAccessor)
    // private heightmap: BitStorage;
    // private minY: number;
    // private mutablePos1: BlockPos$MutableBlockPos;
    // private mutablePos2: BlockPos$MutableBlockPos;
    // private extendSourcesBelowWorld(value: number): number;
    // private fill(lowestSourceY: number): void;
    fillFrom(chunk: ChunkAccess): void;
    // private findLowestSourceBelow(level: BlockGetter, startPos: BlockPos, startState: BlockState): number;
    // private findLowestSourceY(chunk: ChunkAccess, topSectionIndex: number, x: number, z: number): number;
    // private get(index: number): number;
    getHighestLowestSourceY(): number;
    getLowestSourceY(x: number, z: number): number;
    // private set(index: number, value: number): void;
    update(level: BlockGetter, x: number, y: number, z: number): boolean;
    // private updateEdge(level: BlockGetter, index: number, oldTopEdgeY: number, topPos: BlockPos, topState: BlockState, bottomPos: BlockPos, bottomState: BlockState): boolean;
}