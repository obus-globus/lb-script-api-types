import type { DataLayerStorageMap } from '../../../../../net/minecraft/world/level/lighting/DataLayerStorageMap.d.ts'
export class SkyLightSectionStorage$SkyDataLayerStorageMap extends DataLayerStorageMap<SkyLightSectionStorage$SkyDataLayerStorageMap> {
    constructor(map: { [key: string]: any }, topSections: { [key: string]: any }, currentLowestY: number)
    // private currentLowestY: number;
    // private topSections: { [key: string]: any };
    copy(): SkyLightSectionStorage$SkyDataLayerStorageMap;
}