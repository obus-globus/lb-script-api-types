import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { DebugLevelSourceAccessor } from '../../../../../net/fabricmc/fabric/mixin/registry/sync/DebugLevelSourceAccessor.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder$Reference } from '../../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { WorldGenRegion } from '../../../../../net/minecraft/server/level/WorldGenRegion.d.ts'
import type { LevelHeightAccessor } from '../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { NoiseColumn } from '../../../../../net/minecraft/world/level/NoiseColumn.d.ts'
import type { StructureManager } from '../../../../../net/minecraft/world/level/StructureManager.d.ts'
import type { WorldGenLevel } from '../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BiomeManager } from '../../../../../net/minecraft/world/level/biome/BiomeManager.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ChunkAccess } from '../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { ChunkGenerator } from '../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { Heightmap$Types } from '../../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
import type { RandomState } from '../../../../../net/minecraft/world/level/levelgen/RandomState.d.ts'
import type { Blender } from '../../../../../net/minecraft/world/level/levelgen/blending/Blender.d.ts'
export class DebugLevelSource extends ChunkGenerator implements DebugLevelSourceAccessor {
    static BARRIER_HEIGHT: number;
    static CODEC: MapCodec<DebugLevelSource>;
    static HEIGHT: number;
    static getBlockStateFor(paramworldX: number, paramworldZ: number): BlockState;
    static setALL_BLOCKS(paramarg0: BlockState[]): void;
    static setGRID_HEIGHT(paramarg0: number): void;
    static setGRID_WIDTH(paramarg0: number): void;
    constructor(plains: Holder$Reference<Biome>)
    addDebugScreenInfo(result: string[], randomState: RandomState, feetPos: BlockPos): void;
    applyBiomeDecoration(level: WorldGenLevel, chunk: ChunkAccess, structureManager: StructureManager): void;
    applyCarvers(region: WorldGenRegion, seed: number, randomState: RandomState, biomeManager: BiomeManager, structureManager: StructureManager, chunk: ChunkAccess): void;
    buildSurface(level: WorldGenRegion, structureManager: StructureManager, randomState: RandomState, protoChunk: ChunkAccess): void;
    codec(): MapCodec<ChunkGenerator>;
    fillFromNoise(blender: Blender, randomState: RandomState, structureManager: StructureManager, centerChunk: ChunkAccess): CompletableFuture<ChunkAccess>;
    getBaseColumn(x: number, z: number, heightAccessor: LevelHeightAccessor, randomState: RandomState): NoiseColumn;
    getBaseHeight(x: number, z: number, type: Heightmap$Types, heightAccessor: LevelHeightAccessor, randomState: RandomState): number;
    getGenDepth(): number;
    getMinY(): number;
    getSeaLevel(): number;
    spawnOriginalMobs(worldGenRegion: WorldGenRegion): void;
}