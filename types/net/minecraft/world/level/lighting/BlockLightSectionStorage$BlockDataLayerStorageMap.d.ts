import type { DataLayer } from '../../../../../net/minecraft/world/level/chunk/DataLayer.d.ts'
import type { DataLayerStorageMap } from '../../../../../net/minecraft/world/level/lighting/DataLayerStorageMap.d.ts'
export class BlockLightSectionStorage$BlockDataLayerStorageMap extends DataLayerStorageMap<BlockLightSectionStorage$BlockDataLayerStorageMap> {
    constructor(map: Long2ObjectOpenHashMap<DataLayer>)
    copy(): BlockLightSectionStorage$BlockDataLayerStorageMap;
}