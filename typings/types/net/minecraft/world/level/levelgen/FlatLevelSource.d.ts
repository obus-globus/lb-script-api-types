import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { HolderLookup } from '../../../../../net/minecraft/core/HolderLookup.d.ts'
import type { WorldGenRegion } from '../../../../../net/minecraft/server/level/WorldGenRegion.d.ts'
import type { LevelHeightAccessor } from '../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { NoiseColumn } from '../../../../../net/minecraft/world/level/NoiseColumn.d.ts'
import type { StructureManager } from '../../../../../net/minecraft/world/level/StructureManager.d.ts'
import type { BiomeManager } from '../../../../../net/minecraft/world/level/biome/BiomeManager.d.ts'
import type { ChunkAccess } from '../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { ChunkGenerator } from '../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { ChunkGeneratorStructureState } from '../../../../../net/minecraft/world/level/chunk/ChunkGeneratorStructureState.d.ts'
import type { Heightmap$Types } from '../../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
import type { RandomState } from '../../../../../net/minecraft/world/level/levelgen/RandomState.d.ts'
import type { Blender } from '../../../../../net/minecraft/world/level/levelgen/blending/Blender.d.ts'
import type { FlatLevelGeneratorSettings } from '../../../../../net/minecraft/world/level/levelgen/flat/FlatLevelGeneratorSettings.d.ts'
import type { StructureSet } from '../../../../../net/minecraft/world/level/levelgen/structure/StructureSet.d.ts'
export class FlatLevelSource extends ChunkGenerator {
    static CODEC: MapCodec<FlatLevelSource>;
    constructor(generatorSettings: FlatLevelGeneratorSettings)
    // private settings: FlatLevelGeneratorSettings;
    addDebugScreenInfo(result: string[], randomState: RandomState, feetPos: BlockPos): void;
    applyCarvers(region: WorldGenRegion, seed: number, randomState: RandomState, biomeManager: BiomeManager, structureManager: StructureManager, chunk: ChunkAccess): void;
    buildSurface(level: WorldGenRegion, structureManager: StructureManager, randomState: RandomState, protoChunk: ChunkAccess): void;
    codec(): MapCodec<ChunkGenerator>;
    createState(structureSets: HolderLookup<StructureSet>, randomState: RandomState, levelSeed: number): ChunkGeneratorStructureState;
    fillFromNoise(blender: Blender, randomState: RandomState, structureManager: StructureManager, centerChunk: ChunkAccess): CompletableFuture<ChunkAccess>;
    getBaseColumn(x: number, z: number, heightAccessor: LevelHeightAccessor, randomState: RandomState): NoiseColumn;
    getBaseHeight(x: number, z: number, type: Heightmap$Types, heightAccessor: LevelHeightAccessor, randomState: RandomState): number;
    getGenDepth(): number;
    getMinY(): number;
    getSeaLevel(): number;
    getSpawnHeight(heightAccessor: LevelHeightAccessor): number;
    settings(): FlatLevelGeneratorSettings;
    spawnOriginalMobs(worldGenRegion: WorldGenRegion): void;
}