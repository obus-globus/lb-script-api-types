import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { SectionPos } from '../../../../../net/minecraft/core/SectionPos.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { DataLayer } from '../../../../../net/minecraft/world/level/chunk/DataLayer.d.ts'
import type { LayerLightEventListener } from '../../../../../net/minecraft/world/level/lighting/LayerLightEventListener.d.ts'
export class LayerLightEventListener$DummyLightLayerEventListener extends Enum<LayerLightEventListener$DummyLightLayerEventListener> implements LayerLightEventListener {
    static INSTANCE: LayerLightEventListener$DummyLightLayerEventListener;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): LayerLightEventListener$DummyLightLayerEventListener;
    static values(): LayerLightEventListener$DummyLightLayerEventListener[];
    private constructor()
    checkBlock(pos: BlockPos): void;
    getDataLayerData(pos: SectionPos): DataLayer;
    getLightValue(pos: BlockPos): number;
    hasLightWork(): boolean;
    propagateLightSources(pos: ChunkPos): void;
    runLightUpdates(): number;
    setLightEnabled(pos: ChunkPos, enable: boolean): void;
    updateSectionStatus(pos: BlockPos, sectionEmpty: boolean): void;
    updateSectionStatus(pos: SectionPos, sectionEmpty: boolean): void;
    name(): "INSTANCE";
}