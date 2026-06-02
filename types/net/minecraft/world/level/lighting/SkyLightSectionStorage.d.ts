import type { DataLayer } from '../../../../../net/minecraft/world/level/chunk/DataLayer.d.ts'
import type { LightChunkGetter } from '../../../../../net/minecraft/world/level/chunk/LightChunkGetter.d.ts'
import type { LayerLightSectionStorage } from '../../../../../net/minecraft/world/level/lighting/LayerLightSectionStorage.d.ts'
import type { SkyLightSectionStorage$SkyDataLayerStorageMap } from '../../../../../net/minecraft/world/level/lighting/SkyLightSectionStorage$SkyDataLayerStorageMap.d.ts'
export class SkyLightSectionStorage extends LayerLightSectionStorage<SkyLightSectionStorage$SkyDataLayerStorageMap> {
    constructor(chunkSource: LightChunkGetter)
    createDataLayer(sectionNode: number): DataLayer;
    getBottomSectionY(): number;
    getLightValue(blockNode: number): number;
    getLightValue(blockNode: number, updating: boolean): number;
    getTopSectionY(zeroNode: number): number;
    hasLightDataAtOrBelow(sectionY: number): boolean;
    isAboveData(sectionNode: number): boolean;
    onNodeAdded(sectionNode: number): void;
    onNodeRemoved(sectionNode: number): void;
}