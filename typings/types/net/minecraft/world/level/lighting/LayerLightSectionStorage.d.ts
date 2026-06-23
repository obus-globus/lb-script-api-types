import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LightLayer } from '../../../../../net/minecraft/world/level/LightLayer.d.ts'
import type { DataLayer } from '../../../../../net/minecraft/world/level/chunk/DataLayer.d.ts'
import type { LightChunkGetter } from '../../../../../net/minecraft/world/level/chunk/LightChunkGetter.d.ts'
import type { DataLayerStorageMap } from '../../../../../net/minecraft/world/level/lighting/DataLayerStorageMap.d.ts'
import type { LayerLightSectionStorage$SectionType } from '../../../../../net/minecraft/world/level/lighting/LayerLightSectionStorage$SectionType.d.ts'
import type { LightEngine } from '../../../../../net/minecraft/world/level/lighting/LightEngine.d.ts'
export abstract class LayerLightSectionStorage<M extends DataLayerStorageMap<M>> extends Object {
    constructor(layer: LightLayer, chunkSource: LightChunkGetter, initialMap: M)
    // private changedSections: (Object | null)[];
    // private chunkSource: LightChunkGetter;
    // private columnsToRetainQueuedDataFor: (Object | null)[];
    // private columnsWithSources: (Object | null)[];
    // private hasInconsistencies: boolean;
    // private layer: LightLayer;
    // private queuedSections: { [key: string]: any };
    // private sectionStates: { [key: string]: any };
    // private sectionsAffectedByLightUpdates: (Object | null)[];
    // private toRemove: (Object | null)[];
    // private updatingSectionData: M;
    // private visibleSectionData: M;
    createDataLayer(sectionNode: number): DataLayer;
    getDataLayer(sections: M, sectionNode: number): DataLayer;
    getDataLayer(sectionNode: number, updating: boolean): DataLayer;
    getDataLayerData(sectionNode: number): DataLayer;
    getDataLayerToWrite(sectionNode: number): DataLayer;
    getDebugSectionType(sectionNode: number): LayerLightSectionStorage$SectionType;
    getLightValue(blockNode: number): number;
    getStoredLevel(blockNode: number): number;
    hasInconsistencies(): boolean;
    // private initializeSection(sectionNode: number): void;
    lightOnInColumn(sectionZeroNode: number): boolean;
    lightOnInSection(sectionNode: number): boolean;
    markNewInconsistencies(engine: LightEngine<M, Object>): void;
    markSectionAndNeighborsAsAffected(sectionNode: number): void;
    onNodeAdded(sectionNode: number): void;
    onNodeRemoved(sectionNode: number): void;
    putSectionState(sectionNode: number, state: number): void;
    queueSectionData(sectionNode: number, data: DataLayer): void;
    // private removeSection(sectionNode: number): void;
    retainData(zeroNode: number, retain: boolean): void;
    setLightEnabled(zeroNode: number, enable: boolean): void;
    setStoredLevel(blockNode: number, level: number): void;
    storingLightForSection(sectionNode: number): boolean;
    swapSectionMap(): void;
    updateSectionStatus(sectionNode: number, sectionEmpty: boolean): void;
}