import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { SectionPos } from '../../../../../net/minecraft/core/SectionPos.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { LevelHeightAccessor } from '../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { LightLayer } from '../../../../../net/minecraft/world/level/LightLayer.d.ts'
import type { DataLayer } from '../../../../../net/minecraft/world/level/chunk/DataLayer.d.ts'
import type { LightChunkGetter } from '../../../../../net/minecraft/world/level/chunk/LightChunkGetter.d.ts'
import type { LayerLightEventListener } from '../../../../../net/minecraft/world/level/lighting/LayerLightEventListener.d.ts'
import type { LayerLightSectionStorage$SectionType } from '../../../../../net/minecraft/world/level/lighting/LayerLightSectionStorage$SectionType.d.ts'
import type { LightEngine } from '../../../../../net/minecraft/world/level/lighting/LightEngine.d.ts'
import type { LightEventListener } from '../../../../../net/minecraft/world/level/lighting/LightEventListener.d.ts'
export class LevelLightEngine extends Object implements LightEventListener {
    static EMPTY: LevelLightEngine;
    static LIGHT_SECTION_PADDING: number;
    private constructor()
    constructor(chunkSource: LightChunkGetter, hasBlockLight: boolean, hasSkyLight: boolean)
    // private blockEngine: LightEngine<Object, Object>;
    // private levelHeightAccessor: LevelHeightAccessor;
    // private skyEngine: LightEngine<Object, Object>;
    checkBlock(pos: BlockPos): void;
    getDebugData(layer: LightLayer, pos: SectionPos): string;
    getDebugSectionType(layer: LightLayer, pos: SectionPos): LayerLightSectionStorage$SectionType;
    getLayerListener(layer: LightLayer): LayerLightEventListener;
    getLightSectionCount(): number;
    getMaxLightSection(): number;
    getMinLightSection(): number;
    getRawBrightness(pos: BlockPos, skyDampen: number): number;
    hasLightWork(): boolean;
    lightOnInColumn(sectionZeroNode: number): boolean;
    propagateLightSources(pos: ChunkPos): void;
    queueSectionData(layer: LightLayer, pos: SectionPos, data: DataLayer): void;
    retainData(pos: ChunkPos, retain: boolean): void;
    runLightUpdates(): number;
    setLightEnabled(pos: ChunkPos, enable: boolean): void;
    updateSectionStatus(pos: SectionPos, sectionEmpty: boolean): void;
    updateSectionStatus(pos: BlockPos, sectionEmpty: boolean): void;
}