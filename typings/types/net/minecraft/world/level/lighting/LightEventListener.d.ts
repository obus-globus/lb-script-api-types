import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { SectionPos } from '../../../../../net/minecraft/core/SectionPos.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
export interface LightEventListener extends Object{
    checkBlock(pos: BlockPos): void;
    hasLightWork(): boolean;
    propagateLightSources(pos: ChunkPos): void;
    runLightUpdates(): number;
    setLightEnabled(pos: ChunkPos, enable: boolean): void;
    updateSectionStatus(pos: BlockPos, sectionEmpty: boolean): void;
    updateSectionStatus(pos: SectionPos, sectionEmpty: boolean): void;
}