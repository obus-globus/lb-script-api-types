import type { DataLayer } from '../../../../../net/minecraft/world/level/chunk/DataLayer.d.ts'
import type { DataLayerStorageMap } from '../../../../../net/minecraft/world/level/lighting/DataLayerStorageMap.d.ts'
export class SkyLightSectionStorage$SkyDataLayerStorageMap extends DataLayerStorageMap<SkyLightSectionStorage$SkyDataLayerStorageMap> {
    constructor(map: Long2ObjectOpenHashMap<DataLayer>, topSections: Long2IntOpenHashMap, currentLowestY: number)
    // private currentLowestY: number;
    // private topSections: Long2IntOpenHashMap;
    copy(): SkyLightSectionStorage$SkyDataLayerStorageMap;
}