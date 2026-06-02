import type { LightChunkGetter } from '../../../../../net/minecraft/world/level/chunk/LightChunkGetter.d.ts'
import type { BlockLightSectionStorage$BlockDataLayerStorageMap } from '../../../../../net/minecraft/world/level/lighting/BlockLightSectionStorage$BlockDataLayerStorageMap.d.ts'
import type { LayerLightSectionStorage } from '../../../../../net/minecraft/world/level/lighting/LayerLightSectionStorage.d.ts'
export class BlockLightSectionStorage extends LayerLightSectionStorage<BlockLightSectionStorage$BlockDataLayerStorageMap> {
    constructor(chunkSource: LightChunkGetter)
    getLightValue(blockNode: number): number;
}