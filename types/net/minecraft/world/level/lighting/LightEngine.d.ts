import type { LongArrayFIFOQueue } from '../../../../../it/unimi/dsi/fastutil/longs/LongArrayFIFOQueue.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { SectionPos } from '../../../../../net/minecraft/core/SectionPos.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { DataLayer } from '../../../../../net/minecraft/world/level/chunk/DataLayer.d.ts'
import type { LightChunk } from '../../../../../net/minecraft/world/level/chunk/LightChunk.d.ts'
import type { LightChunkGetter } from '../../../../../net/minecraft/world/level/chunk/LightChunkGetter.d.ts'
import type { DataLayerStorageMap } from '../../../../../net/minecraft/world/level/lighting/DataLayerStorageMap.d.ts'
import type { LayerLightEventListener } from '../../../../../net/minecraft/world/level/lighting/LayerLightEventListener.d.ts'
import type { LayerLightSectionStorage } from '../../../../../net/minecraft/world/level/lighting/LayerLightSectionStorage.d.ts'
import type { LayerLightSectionStorage$SectionType } from '../../../../../net/minecraft/world/level/lighting/LayerLightSectionStorage$SectionType.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export abstract class LightEngine<M extends DataLayerStorageMap<M>, S extends LayerLightSectionStorage<M>> extends Object implements LayerLightEventListener {
    static MAX_LEVEL: number;
    static getLightBlockInto(paramfromState: BlockState, paramtoState: BlockState, paramdirection: Direction, paramsimpleOpacity: number): number;
    static getOcclusionShape(paramstate: BlockState, paramdirection: Direction): VoxelShape;
    static hasDifferentLightProperties(paramoldState: BlockState, paramnewState: BlockState): boolean;
    constructor(chunkSource: LightChunkGetter, storage: S)
    // private blockNodesToCheck: (Object | null)[];
    // private chunkSource: LightChunkGetter;
    // private decreaseQueue: LongArrayFIFOQueue;
    // private increaseQueue: LongArrayFIFOQueue;
    // private lastChunk: LightChunk[];
    // private lastChunkPos: number[];
    // private storage: S;
    checkBlock(pos: BlockPos): void;
    checkNode(blockNode: number): void;
    // private clearChunkCache(): void;
    enqueueDecrease(fromNode: number, decreaseData: number): void;
    enqueueIncrease(fromNode: number, increaseData: number): void;
    getChunk(chunkX: number, chunkZ: number): LightChunk;
    getDataLayerData(pos: SectionPos): DataLayer;
    getDebugData(sectionNode: number): string;
    getDebugSectionType(sectionNode: number): LayerLightSectionStorage$SectionType;
    getLightValue(pos: BlockPos): number;
    getOpacity(state: BlockState): number;
    getState(pos: BlockPos): BlockState;
    hasLightWork(): boolean;
    propagateDecrease(fromNode: number, decreaseData: number): void;
    // private propagateDecreases(): number;
    propagateIncrease(fromNode: number, increaseData: number, fromLevel: number): void;
    // private propagateIncreases(): number;
    queueSectionData(pos: number, data: DataLayer): void;
    retainData(pos: ChunkPos, retain: boolean): void;
    runLightUpdates(): number;
    setLightEnabled(pos: ChunkPos, enable: boolean): void;
    shapeOccludes(fromState: BlockState, toState: BlockState, direction: Direction): boolean;
    updateSectionStatus(pos: SectionPos, sectionEmpty: boolean): void;
}