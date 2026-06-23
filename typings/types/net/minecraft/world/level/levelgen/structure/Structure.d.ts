import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { RecordCodecBuilder } from '../../../../../../com/mojang/serialization/codecs/RecordCodecBuilder.d.ts'
import type { RecordCodecBuilder$Instance } from '../../../../../../com/mojang/serialization/codecs/RecordCodecBuilder$Instance.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryAccess } from '../../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { MobCategory } from '../../../../../../net/minecraft/world/entity/MobCategory.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelHeightAccessor } from '../../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { StructureManager } from '../../../../../../net/minecraft/world/level/StructureManager.d.ts'
import type { WorldGenLevel } from '../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { Biome } from '../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BiomeSource } from '../../../../../../net/minecraft/world/level/biome/BiomeSource.d.ts'
import type { Rotation } from '../../../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { ChunkGenerator } from '../../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { GenerationStep$Decoration } from '../../../../../../net/minecraft/world/level/levelgen/GenerationStep$Decoration.d.ts'
import type { RandomState } from '../../../../../../net/minecraft/world/level/levelgen/RandomState.d.ts'
import type { BoundingBox } from '../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { Structure$GenerationContext } from '../../../../../../net/minecraft/world/level/levelgen/structure/Structure$GenerationContext.d.ts'
import type { Structure$GenerationStub } from '../../../../../../net/minecraft/world/level/levelgen/structure/Structure$GenerationStub.d.ts'
import type { Structure$StructureSettings } from '../../../../../../net/minecraft/world/level/levelgen/structure/Structure$StructureSettings.d.ts'
import type { StructureSpawnOverride } from '../../../../../../net/minecraft/world/level/levelgen/structure/StructureSpawnOverride.d.ts'
import type { StructureStart } from '../../../../../../net/minecraft/world/level/levelgen/structure/StructureStart.d.ts'
import type { StructureType } from '../../../../../../net/minecraft/world/level/levelgen/structure/StructureType.d.ts'
import type { TerrainAdjustment } from '../../../../../../net/minecraft/world/level/levelgen/structure/TerrainAdjustment.d.ts'
import type { PiecesContainer } from '../../../../../../net/minecraft/world/level/levelgen/structure/pieces/PiecesContainer.d.ts'
import type { StructureTemplateManager } from '../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplateManager.d.ts'
export abstract class Structure extends Object {
    static CODEC: Codec<Holder<Structure>>;
    static DIRECT_CODEC: Codec<Structure>;
    static getMeanFirstOccupiedHeight(paramcontext: Structure$GenerationContext, paramminX: number, paramsizeX: number, paramminZ: number, paramsizeZ: number): number;
    static settingsCodec(parami: RecordCodecBuilder$Instance<Structure>): RecordCodecBuilder<Structure, Structure$StructureSettings>;
    static simpleCodec(paramconstructor: (param0: Structure$StructureSettings) => Structure | null): MapCodec<Structure>;
    constructor(settings: Structure$StructureSettings)
    // private settings: Structure$StructureSettings;
    adjustBoundingBox(boundingBox: BoundingBox): BoundingBox;
    afterPlace(level: WorldGenLevel, structureManager: StructureManager, generator: ChunkGenerator, random: RandomSource, chunkBB: BoundingBox, chunkPos: ChunkPos, pieces: PiecesContainer): void;
    biomes(): Holder<Biome>[];
    findGenerationPoint(context: Structure$GenerationContext): Optional<Structure$GenerationStub>;
    findValidGenerationPoint(context: Structure$GenerationContext): Optional<Structure$GenerationStub>;
    generate(selected: Holder<Structure>, dimension: ResourceKey<Level>, registryAccess: RegistryAccess, chunkGenerator: ChunkGenerator, biomeSource: BiomeSource, randomState: RandomState, structureTemplateManager: StructureTemplateManager, seed: number, sourceChunkPos: ChunkPos, references: number, heightAccessor: LevelHeightAccessor, validBiome: (param0: Holder<Biome>) => boolean): StructureStart;
    getLowestYIn5by5BoxOffset7Blocks(context: Structure$GenerationContext, rotation: Rotation): BlockPos;
    spawnOverrides(): { [key in MobCategory]: StructureSpawnOverride };
    step(): GenerationStep$Decoration;
    terrainAdaptation(): TerrainAdjustment;
    type(): StructureType<any>;
}