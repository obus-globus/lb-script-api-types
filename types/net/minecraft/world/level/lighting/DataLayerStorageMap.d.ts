import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DataLayer } from '../../../../../net/minecraft/world/level/chunk/DataLayer.d.ts'
export abstract class DataLayerStorageMap<M extends DataLayerStorageMap<M>> extends Object {
    constructor(map: Long2ObjectOpenHashMap<DataLayer>)
    // private cacheEnabled: boolean;
    // private lastSectionKeys: number[];
    // private lastSections: DataLayer[];
    // private map: Long2ObjectOpenHashMap<DataLayer>;
    clearCache(): void;
    copy(): M;
    copyDataLayer(sectionNode: number): DataLayer;
    disableCache(): void;
    getLayer(sectionNode: number): DataLayer;
    hasLayer(sectionNode: number): boolean;
    removeLayer(sectionNode: number): DataLayer;
    setLayer(sectionNode: number, layer: DataLayer): void;
}