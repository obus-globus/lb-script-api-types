import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { SectionPos } from '../../../../../net/minecraft/core/SectionPos.d.ts'
import type { DataLayer } from '../../../../../net/minecraft/world/level/chunk/DataLayer.d.ts'
import type { LightEventListener } from '../../../../../net/minecraft/world/level/lighting/LightEventListener.d.ts'
export interface LayerLightEventListener extends Object, LightEventListener{
    getDataLayerData(pos: SectionPos): DataLayer;
    getLightValue(pos: BlockPos): number;
    updateSectionStatus(pos: BlockPos, sectionEmpty: boolean): void;
}