import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SodiumModelDataContainer } from '../../../../../../../net/caffeinemc/mods/sodium/client/services/SodiumModelDataContainer.d.ts'
import type { SodiumAuxiliaryLightManager } from '../../../../../../../net/caffeinemc/mods/sodium/client/world/SodiumAuxiliaryLightManager.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { SectionPos } from '../../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { Level } from '../../../../../../../net/minecraft/world/level/Level.d.ts'
import type { LightLayer } from '../../../../../../../net/minecraft/world/level/LightLayer.d.ts'
import type { Biome } from '../../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BlockEntity } from '../../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { DataLayer } from '../../../../../../../net/minecraft/world/level/chunk/DataLayer.d.ts'
import type { LevelChunk } from '../../../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
import type { LevelChunkSection } from '../../../../../../../net/minecraft/world/level/chunk/LevelChunkSection.d.ts'
import type { PalettedContainerRO } from '../../../../../../../net/minecraft/world/level/chunk/PalettedContainerRO.d.ts'
export class ClonedChunkSection extends Object {
    constructor(arg0: Level, arg1: LevelChunk, arg2: LevelChunkSection, arg3: SectionPos)
    readonly auxLightManager: SodiumAuxiliaryLightManager;
    readonly biomeData: PalettedContainerRO<Holder<Biome>>;
    readonly blockData: PalettedContainerRO<BlockState>;
    readonly blockEntityMap: Int2ReferenceMap<BlockEntity>;
    readonly blockEntityRenderDataMap: Int2ReferenceMap<Object>;
    readonly lastUsedTimestamp: number;
    // private lightDataArrays: DataLayer[];
    readonly modelMap: SodiumModelDataContainer;
    // private pos: SectionPos;
    getAuxLightManager(): SodiumAuxiliaryLightManager;
    getBiomeData(): PalettedContainerRO<Holder<Biome>>;
    getBlockData(): PalettedContainerRO<BlockState>;
    getBlockEntityMap(): Int2ReferenceMap<BlockEntity>;
    getBlockEntityRenderDataMap(): Int2ReferenceMap<Object>;
    getLastUsedTimestamp(): number;
    getLightArray(arg0: LightLayer): DataLayer;
    getModelMap(): SodiumModelDataContainer;
    getPosition(): SectionPos;
    setLastUsedTimestamp(arg0: number): void;
}