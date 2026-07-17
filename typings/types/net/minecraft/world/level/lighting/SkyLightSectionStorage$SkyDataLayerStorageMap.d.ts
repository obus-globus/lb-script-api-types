import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { DataLayerStorageMap } from '../../../../../net/minecraft/world/level/lighting/DataLayerStorageMap.d.ts'
export class SkyLightSectionStorage$SkyDataLayerStorageMap extends DataLayerStorageMap<SkyLightSectionStorage$SkyDataLayerStorageMap> {
    constructor(map: JavaMap<any, any>, topSections: JavaMap<any, any>, currentLowestY: number)
    // private currentLowestY: number;
    // private topSections: JavaMap<any, any>;
    copy(): SkyLightSectionStorage$SkyDataLayerStorageMap;
}