import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryAccess } from '../../../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { ChunkPos } from '../../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { LevelHeightAccessor } from '../../../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { Biome } from '../../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BiomeSource } from '../../../../../../../net/minecraft/world/level/biome/BiomeSource.d.ts'
import type { ChunkGenerator } from '../../../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { Heightmap$Types } from '../../../../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
import type { RandomState } from '../../../../../../../net/minecraft/world/level/levelgen/RandomState.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { StructureTemplateManager } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplateManager.d.ts'
export class PieceGeneratorSupplier$Context<C extends FeatureConfiguration> extends Record {
    constructor(chunkGenerator: ChunkGenerator, biomeSource: BiomeSource, randomState: RandomState, seed: number, chunkPos: ChunkPos, config: C, heightAccessor: LevelHeightAccessor, validBiome: (param0: Holder<Biome>) => boolean, structureTemplateManager: StructureTemplateManager, registryAccess: RegistryAccess)
    // private biomeSource: BiomeSource;
    // private chunkGenerator: ChunkGenerator;
    // private chunkPos: ChunkPos;
    // private config: C;
    // private heightAccessor: LevelHeightAccessor;
    // private randomState: RandomState;
    // private registryAccess: RegistryAccess;
    // private seed: number;
    // private structureTemplateManager: StructureTemplateManager;
    // private validBiome: (param0: Holder<Biome>) => boolean;
    biomeSource(): BiomeSource;
    chunkGenerator(): ChunkGenerator;
    chunkPos(): ChunkPos;
    config(): C;
    equals(o: Object | null): boolean;
    hashCode(): number;
    heightAccessor(): LevelHeightAccessor;
    randomState(): RandomState;
    registryAccess(): RegistryAccess;
    seed(): number;
    structureTemplateManager(): StructureTemplateManager;
    toString(): string;
    validBiome(): (param0: Holder<Biome>) => boolean;
    validBiomeOnTop(type: Heightmap$Types): boolean;
}