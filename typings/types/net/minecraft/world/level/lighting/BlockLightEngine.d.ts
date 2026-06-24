import type { BlockPos$MutableBlockPos } from '../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { LightChunkGetter } from '../../../../../net/minecraft/world/level/chunk/LightChunkGetter.d.ts'
import type { BlockLightSectionStorage } from '../../../../../net/minecraft/world/level/lighting/BlockLightSectionStorage.d.ts'
import type { BlockLightSectionStorage$BlockDataLayerStorageMap } from '../../../../../net/minecraft/world/level/lighting/BlockLightSectionStorage$BlockDataLayerStorageMap.d.ts'
import type { LightEngine } from '../../../../../net/minecraft/world/level/lighting/LightEngine.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class BlockLightEngine extends LightEngine<BlockLightSectionStorage$BlockDataLayerStorageMap, BlockLightSectionStorage> {
    static MAX_LEVEL: number;
    static getLightDampeningInto(paramfromState: BlockState, paramtoState: BlockState, paramdirection: Direction, paramsimpleOpacity: number): number;
    static getOcclusionShape(paramstate: BlockState, paramdirection: Direction): VoxelShape;
    static hasDifferentLightProperties(paramoldState: BlockState, paramnewState: BlockState): boolean;
    constructor(chunkSource: LightChunkGetter)
    constructor(chunkSource: LightChunkGetter, storage: BlockLightSectionStorage)
    // private mutablePos: BlockPos$MutableBlockPos;
    checkNode(blockNode: number): void;
    // private getEmission(blockNode: number, state: BlockState): number;
    propagateDecrease(fromNode: number, decreaseData: number): void;
    propagateIncrease(fromNode: number, increaseData: number, fromLevel: number): void;
    propagateLightSources(pos: ChunkPos): void;
}