import type { DataFixer } from '../../../../../../com/mojang/datafixers/DataFixer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RegistryAccess } from '../../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelHeightAccessor } from '../../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { BiomeSource } from '../../../../../../net/minecraft/world/level/biome/BiomeSource.d.ts'
import type { ChunkGenerator } from '../../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { ChunkScanAccess } from '../../../../../../net/minecraft/world/level/chunk/storage/ChunkScanAccess.d.ts'
import type { RandomState } from '../../../../../../net/minecraft/world/level/levelgen/RandomState.d.ts'
import type { Structure } from '../../../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
import type { StructureCheckResult } from '../../../../../../net/minecraft/world/level/levelgen/structure/StructureCheckResult.d.ts'
import type { StructureStart } from '../../../../../../net/minecraft/world/level/levelgen/structure/StructureStart.d.ts'
import type { StructurePlacement } from '../../../../../../net/minecraft/world/level/levelgen/structure/placement/StructurePlacement.d.ts'
import type { StructureTemplateManager } from '../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplateManager.d.ts'
export class StructureCheck extends Object {
    constructor(storageAccess: ChunkScanAccess, registryAccess: RegistryAccess, structureTemplateManager: StructureTemplateManager, dimension: ResourceKey<Level>, chunkGenerator: ChunkGenerator, randomState: RandomState, heightAccessor: LevelHeightAccessor, biomeSource: BiomeSource, seed: number, fixerUpper: DataFixer)
    // private biomeSource: BiomeSource;
    // private chunkGenerator: ChunkGenerator;
    // private dimension: ResourceKey<Level>;
    // private featureChecks: Map<Structure, { [key: string]: any }>;
    // private fixerUpper: DataFixer;
    // private heightAccessor: LevelHeightAccessor;
    // private loadedChunks: { [key: string]: any };
    // private randomState: RandomState;
    // private registryAccess: RegistryAccess;
    // private seed: number;
    // private storageAccess: ChunkScanAccess;
    // private structureTemplateManager: StructureTemplateManager;
    // private canCreateStructure(pos: ChunkPos, structure: Structure): boolean;
    checkStart(pos: ChunkPos, structure: Structure, placement: StructurePlacement, requireUnreferenced: boolean): StructureCheckResult;
    // private checkStructureInfo(cachedResult: { [key: string]: any }, structure: Structure, requireUnreferenced: boolean): StructureCheckResult;
    incrementReference(chunkPos: ChunkPos, structure: Structure): void;
    // private loadStructures(chunkTag: CompoundTag): { [key: string]: any };
    onStructureLoad(pos: ChunkPos, starts: Map<Structure, StructureStart>): void;
    // private storeFullResults(posKey: number, starts: { [key: string]: any }): void;
    // private tryLoadFromStorage(pos: ChunkPos, structure: Structure, requireUnreferenced: boolean, posKey: number): StructureCheckResult;
}