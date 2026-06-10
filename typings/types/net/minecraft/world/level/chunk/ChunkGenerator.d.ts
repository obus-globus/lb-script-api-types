import type { Pair } from '../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { HolderLookup } from '../../../../../net/minecraft/core/HolderLookup.d.ts'
import type { RegistryAccess } from '../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { SectionPos } from '../../../../../net/minecraft/core/SectionPos.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { WorldGenRegion } from '../../../../../net/minecraft/server/level/WorldGenRegion.d.ts'
import type { WeightedList } from '../../../../../net/minecraft/util/random/WeightedList.d.ts'
import type { MobCategory } from '../../../../../net/minecraft/world/entity/MobCategory.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelHeightAccessor } from '../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { NoiseColumn } from '../../../../../net/minecraft/world/level/NoiseColumn.d.ts'
import type { StructureManager } from '../../../../../net/minecraft/world/level/StructureManager.d.ts'
import type { WorldGenLevel } from '../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BiomeGenerationSettings } from '../../../../../net/minecraft/world/level/biome/BiomeGenerationSettings.d.ts'
import type { BiomeManager } from '../../../../../net/minecraft/world/level/biome/BiomeManager.d.ts'
import type { BiomeSource } from '../../../../../net/minecraft/world/level/biome/BiomeSource.d.ts'
import type { FeatureSorter$StepFeatureData } from '../../../../../net/minecraft/world/level/biome/FeatureSorter$StepFeatureData.d.ts'
import type { MobSpawnSettings$SpawnerData } from '../../../../../net/minecraft/world/level/biome/MobSpawnSettings$SpawnerData.d.ts'
import type { ChunkAccess } from '../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { ChunkGeneratorStructureState } from '../../../../../net/minecraft/world/level/chunk/ChunkGeneratorStructureState.d.ts'
import type { Heightmap$Types } from '../../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
import type { RandomState } from '../../../../../net/minecraft/world/level/levelgen/RandomState.d.ts'
import type { Blender } from '../../../../../net/minecraft/world/level/levelgen/blending/Blender.d.ts'
import type { Structure } from '../../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
import type { StructureSet } from '../../../../../net/minecraft/world/level/levelgen/structure/StructureSet.d.ts'
import type { StructureSet$StructureSelectionEntry } from '../../../../../net/minecraft/world/level/levelgen/structure/StructureSet$StructureSelectionEntry.d.ts'
import type { ConcentricRingsStructurePlacement } from '../../../../../net/minecraft/world/level/levelgen/structure/placement/ConcentricRingsStructurePlacement.d.ts'
import type { StructureTemplateManager } from '../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplateManager.d.ts'
export abstract class ChunkGenerator extends Object {
    static CODEC: Codec<ChunkGenerator>;
    constructor(biomeSource: BiomeSource)
    constructor(biomeSource: BiomeSource, generationSettingsGetter: (param0: Holder<Biome>) => BiomeGenerationSettings)
    readonly biomeSource: BiomeSource;
    featuresPerStep: () => FeatureSorter$StepFeatureData[];
    // private generationSettingsGetter: (param0: Holder<Biome>) => BiomeGenerationSettings;
    addDebugScreenInfo(result: string[], randomState: RandomState, feetPos: BlockPos): void;
    applyBiomeDecoration(level: WorldGenLevel, chunk: ChunkAccess, structureManager: StructureManager): void;
    applyCarvers(region: WorldGenRegion, seed: number, randomState: RandomState, biomeManager: BiomeManager, structureManager: StructureManager, chunk: ChunkAccess): void;
    buildSurface(level: WorldGenRegion, structureManager: StructureManager, randomState: RandomState, protoChunk: ChunkAccess): void;
    codec(): MapCodec<ChunkGenerator>;
    createBiomes(randomState: RandomState, blender: Blender, structureManager: StructureManager, protoChunk: ChunkAccess): CompletableFuture<ChunkAccess>;
    createReferences(level: WorldGenLevel, structureManager: StructureManager, centerChunk: ChunkAccess): void;
    createState(structureSets: HolderLookup<StructureSet>, randomState: RandomState, legacyLevelSeed: number): ChunkGeneratorStructureState;
    createStructures(registryAccess: RegistryAccess, state: ChunkGeneratorStructureState, structureManager: StructureManager, centerChunk: ChunkAccess, structureTemplateManager: StructureTemplateManager, level: ResourceKey<Level>): void;
    fillFromNoise(blender: Blender, randomState: RandomState, structureManager: StructureManager, centerChunk: ChunkAccess): CompletableFuture<ChunkAccess>;
    findNearestMapStructure(level: ServerLevel, wantedStructures: Holder<Structure>[], pos: BlockPos, maxSearchRadius: number, createReference: boolean): Pair<BlockPos, Holder<Structure>>;
    getBaseColumn(x: number, z: number, heightAccessor: LevelHeightAccessor, randomState: RandomState): NoiseColumn;
    getBaseHeight(x: number, z: number, type: Heightmap$Types, heightAccessor: LevelHeightAccessor, randomState: RandomState): number;
    getBiomeGenerationSettings(biome: Holder<Biome>): BiomeGenerationSettings;
    getBiomeSource(): BiomeSource;
    getFirstFreeHeight(x: number, z: number, type: Heightmap$Types, heightAccessor: LevelHeightAccessor, randomState: RandomState): number;
    getFirstOccupiedHeight(x: number, z: number, type: Heightmap$Types, heightAccessor: LevelHeightAccessor, randomState: RandomState): number;
    getGenDepth(): number;
    getMinY(): number;
    getMobsAt(biome: Holder<Biome>, structureManager: StructureManager, mobCategory: MobCategory, pos: BlockPos): WeightedList<MobSpawnSettings$SpawnerData>;
    // private getNearestGeneratedStructure(structures: Holder<Structure>[], level: ServerLevel, structureManager: StructureManager, pos: BlockPos, createReference: boolean, rings: ConcentricRingsStructurePlacement): Pair<BlockPos, Holder<Structure>>;
    getSeaLevel(): number;
    getSpawnHeight(heightAccessor: LevelHeightAccessor): number;
    getTypeNameForDataFixer(): Optional<Identifier>;
    spawnOriginalMobs(worldGenRegion: WorldGenRegion): void;
    // private tryGenerateStructure(selected: StructureSet$StructureSelectionEntry, structureManager: StructureManager, registryAccess: RegistryAccess, randomState: RandomState, structureTemplateManager: StructureTemplateManager, seed: number, centerChunk: ChunkAccess, sourceChunkPos: ChunkPos, sectionPos: SectionPos, level: ResourceKey<Level>): boolean;
    validate(): void;
}