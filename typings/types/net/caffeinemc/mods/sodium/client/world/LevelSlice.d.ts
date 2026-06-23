import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SodiumModelData } from '../../../../../../net/caffeinemc/mods/sodium/client/services/SodiumModelData.d.ts'
import type { SodiumModelDataContainer } from '../../../../../../net/caffeinemc/mods/sodium/client/services/SodiumModelDataContainer.d.ts'
import type { SodiumAuxiliaryLightManager } from '../../../../../../net/caffeinemc/mods/sodium/client/world/SodiumAuxiliaryLightManager.d.ts'
import type { LevelBiomeSlice } from '../../../../../../net/caffeinemc/mods/sodium/client/world/biome/LevelBiomeSlice.d.ts'
import type { LevelColorCache } from '../../../../../../net/caffeinemc/mods/sodium/client/world/biome/LevelColorCache.d.ts'
import type { ChunkRenderContext } from '../../../../../../net/caffeinemc/mods/sodium/client/world/cloned/ChunkRenderContext.d.ts'
import type { ClonedChunkSection } from '../../../../../../net/caffeinemc/mods/sodium/client/world/cloned/ClonedChunkSection.d.ts'
import type { ClonedChunkSectionCache } from '../../../../../../net/caffeinemc/mods/sodium/client/world/cloned/ClonedChunkSectionCache.d.ts'
import type { FabricBlockGetter } from '../../../../../../net/fabricmc/fabric/api/blockgetter/v2/FabricBlockGetter.d.ts'
import type { ClientLevel } from '../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { BlockAndTintGetter } from '../../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { SectionPos } from '../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { CardinalLighting } from '../../../../../../net/minecraft/world/level/CardinalLighting.d.ts'
import type { ColorResolver } from '../../../../../../net/minecraft/world/level/ColorResolver.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { LightLayer } from '../../../../../../net/minecraft/world/level/LightLayer.d.ts'
import type { Biome } from '../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { DataLayer } from '../../../../../../net/minecraft/world/level/chunk/DataLayer.d.ts'
import type { BoundingBox } from '../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { LevelLightEngine } from '../../../../../../net/minecraft/world/level/lighting/LevelLightEngine.d.ts'
import type { FluidState } from '../../../../../../net/minecraft/world/level/material/FluidState.d.ts'
export class LevelSlice extends Object implements FabricBlockGetter, BlockAndTintGetter {
    static EMPTY: BlockAndTintGetter;
    static getLocalBlockIndex(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static getLocalSectionIndex(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static prepare(paramarg0: Level, paramarg1: SectionPos, paramarg2: ClonedChunkSectionCache): ChunkRenderContext;
    constructor(arg0: ClientLevel)
    // private ambientOcclusion: boolean;
    // private auxLightManager: SodiumAuxiliaryLightManager[];
    // private biomeColors: LevelColorCache;
    // private biomeSlice: LevelBiomeSlice;
    // private blockArrays: BlockState[][];
    // private blockEntityArrays: { [key: string]: any }[];
    // private blockEntityRenderDataArrays: { [key: string]: any }[];
    // private level: ClientLevel;
    // private lightArrays: DataLayer[][];
    // private modelMapArrays: SodiumModelDataContainer[];
    // private originBlockX: number;
    // private originBlockY: number;
    // private originBlockZ: number;
    // private volume: BoundingBox;
    cardinalLighting(): CardinalLighting;
    copyData(arg0: ChunkRenderContext): void;
    // private copySectionData(arg0: ChunkRenderContext, arg1: number): void;
    getBiomeFabric(arg0: BlockPos): Holder<Object>;
    getBiomeFabric(arg0: BlockPos): Holder<Biome>;
    getBlockEntity(arg0: number, arg1: number, arg2: number): BlockEntity;
    getBlockEntity(arg0: BlockPos): BlockEntity;
    getBlockEntity<T extends BlockEntity>(pos: BlockPos, type: BlockEntityType<T>): Optional<T>;
    getBlockEntityRenderData(arg0: BlockPos): Object;
    getBlockState(arg0: number, arg1: number, arg2: number): BlockState;
    getBlockState(arg0: BlockPos): BlockState;
    getBlockTint(arg0: BlockPos, arg1: (param0: Biome, param1: number, param2: number) => number): number;
    getBrightness(arg0: LightLayer, arg1: BlockPos): number;
    getFluidState(arg0: BlockPos): FluidState;
    getHeight(): number;
    getLightEngine(): LevelLightEngine;
    getMinY(): number;
    getPlatformModelData(arg0: BlockPos): SodiumModelData;
    getRawBrightness(arg0: BlockPos, arg1: number): number;
    hasBiomeBlend(): boolean;
    hasBiomes(): boolean;
    reset(): void;
    // private unpackBlockData(arg0: BlockState[], arg1: ChunkRenderContext, arg2: ClonedChunkSection): void;
    useAmbientOcclusion(): boolean;
}