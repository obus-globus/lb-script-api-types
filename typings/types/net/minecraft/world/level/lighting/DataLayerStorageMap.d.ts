import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DataLayer } from '../../../../../net/minecraft/world/level/chunk/DataLayer.d.ts'
export abstract class DataLayerStorageMap<M extends DataLayerStorageMap<M>> extends Object {
    constructor(map: { [key: string]: any })
    // private cacheEnabled: boolean;
    // private lastSectionKeys: number[];
    // private lastSections: DataLayer[];
    // private map: { [key: string]: any };
    clearCache(): void;
    copy(): M;
    copyDataLayer(sectionNode: number): DataLayer;
    disableCache(): void;
    getLayer(sectionNode: number): DataLayer;
    hasLayer(sectionNode: number): boolean;
    removeLayer(sectionNode: number): DataLayer;
    setLayer(sectionNode: number, layer: DataLayer): void;
}