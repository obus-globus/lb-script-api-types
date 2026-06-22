import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { SectionPos } from '../../../../../net/minecraft/core/SectionPos.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { DataLayer } from '../../../../../net/minecraft/world/level/chunk/DataLayer.d.ts'
import type { LightEventListener } from '../../../../../net/minecraft/world/level/lighting/LightEventListener.d.ts'
export interface LayerLightEventListener extends Object, LightEventListener{
    checkBlock(pos: BlockPos): void;
    getDataLayerData(pos: SectionPos): DataLayer;
    getLightValue(pos: BlockPos): number;
    hasLightWork(): boolean;
    propagateLightSources(pos: ChunkPos): void;
    runLightUpdates(): number;
    setLightEnabled(pos: ChunkPos, enable: boolean): void;
    updateSectionStatus(pos: BlockPos, sectionEmpty: boolean): void;
}