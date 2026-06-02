import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryAccess } from '../../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { LevelHeightAccessor } from '../../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { Biome } from '../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BiomeSource } from '../../../../../../net/minecraft/world/level/biome/BiomeSource.d.ts'
import type { ChunkGenerator } from '../../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { RandomState } from '../../../../../../net/minecraft/world/level/levelgen/RandomState.d.ts'
import type { WorldgenRandom } from '../../../../../../net/minecraft/world/level/levelgen/WorldgenRandom.d.ts'
import type { StructureTemplateManager } from '../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplateManager.d.ts'
export class Structure$GenerationContext extends Record {
    // private biomeSource: BiomeSource;
    // private chunkGenerator: ChunkGenerator;
    // private chunkPos: ChunkPos;
    // private heightAccessor: LevelHeightAccessor;
    // private random: WorldgenRandom;
    // private randomState: RandomState;
    // private registryAccess: RegistryAccess;
    // private seed: number;
    // private structureTemplateManager: StructureTemplateManager;
    // private validBiome: (param0: Holder<Biome>) => kotlin.Boolean;
    biomeSource(): BiomeSource;
    chunkGenerator(): ChunkGenerator;
    chunkPos(): ChunkPos;
    equals(o: Object | null): boolean;
    hashCode(): number;
    heightAccessor(): LevelHeightAccessor;
    random(): WorldgenRandom;
    randomState(): RandomState;
    registryAccess(): RegistryAccess;
    seed(): number;
    structureTemplateManager(): StructureTemplateManager;
    toString(): string;
    validBiome(): (param0: Holder<Biome>) => kotlin.Boolean;
}