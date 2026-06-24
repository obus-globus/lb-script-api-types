import type { BlockPos$MutableBlockPos } from '../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { LightChunkGetter } from '../../../../../net/minecraft/world/level/chunk/LightChunkGetter.d.ts'
import type { ChunkSkyLightSources } from '../../../../../net/minecraft/world/level/lighting/ChunkSkyLightSources.d.ts'
import type { LightEngine } from '../../../../../net/minecraft/world/level/lighting/LightEngine.d.ts'
import type { SkyLightSectionStorage } from '../../../../../net/minecraft/world/level/lighting/SkyLightSectionStorage.d.ts'
import type { SkyLightSectionStorage$SkyDataLayerStorageMap } from '../../../../../net/minecraft/world/level/lighting/SkyLightSectionStorage$SkyDataLayerStorageMap.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class SkyLightEngine extends LightEngine<SkyLightSectionStorage$SkyDataLayerStorageMap, SkyLightSectionStorage> {
    static MAX_LEVEL: number;
    static getLightDampeningInto(paramfromState: BlockState, paramtoState: BlockState, paramdirection: Direction, paramsimpleOpacity: number): number;
    static getOcclusionShape(paramstate: BlockState, paramdirection: Direction): VoxelShape;
    static hasDifferentLightProperties(paramoldState: BlockState, paramnewState: BlockState): boolean;
    constructor(chunkSource: LightChunkGetter)
    constructor(chunkSource: LightChunkGetter, storage: SkyLightSectionStorage)
    // private emptyChunkSources: ChunkSkyLightSources;
    // private mutablePos: BlockPos$MutableBlockPos;
    // private addSourcesAbove(x: number, z: number, lowestSourceY: number, worldBottomY: number): void;
    checkNode(blockNode: number): void;
    // private countEmptySectionsBelowIfAtBorder(blockNode: number): number;
    // private getChunkSources(chunkX: number, chunkZ: number): ChunkSkyLightSources;
    // private getLowestSourceY(x: number, z: number, defaultValue: number): number;
    propagateDecrease(fromNode: number, decreaseData: number): void;
    // private propagateFromEmptySections(toNode: number, propagationDirection: Direction, toLevel: number, increase: boolean, emptySectionsBelow: number): void;
    propagateIncrease(fromNode: number, increaseData: number, fromLevel: number): void;
    propagateLightSources(pos: ChunkPos): void;
    // private removeSourcesBelow(x: number, z: number, lowestSourceY: number, worldBottomY: number): void;
    setLightEnabled(pos: ChunkPos, enable: boolean): void;
    // private updateSourcesInColumn(x: number, z: number, lowestSourceY: number): void;
}