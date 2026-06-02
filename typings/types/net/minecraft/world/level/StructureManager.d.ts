import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryAccess } from '../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { SectionPos } from '../../../../net/minecraft/core/SectionPos.d.ts'
import type { WorldGenRegion } from '../../../../net/minecraft/server/level/WorldGenRegion.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { LevelAccessor } from '../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { StructureAccess } from '../../../../net/minecraft/world/level/chunk/StructureAccess.d.ts'
import type { WorldOptions } from '../../../../net/minecraft/world/level/levelgen/WorldOptions.d.ts'
import type { Structure } from '../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
import type { StructureCheck } from '../../../../net/minecraft/world/level/levelgen/structure/StructureCheck.d.ts'
import type { StructureCheckResult } from '../../../../net/minecraft/world/level/levelgen/structure/StructureCheckResult.d.ts'
import type { StructureStart } from '../../../../net/minecraft/world/level/levelgen/structure/StructureStart.d.ts'
import type { StructurePlacement } from '../../../../net/minecraft/world/level/levelgen/structure/placement/StructurePlacement.d.ts'
export class StructureManager extends Object {
    constructor(level: LevelAccessor, worldOptions: WorldOptions, structureCheck: StructureCheck)
    // private level: LevelAccessor;
    // private structureCheck: StructureCheck;
    // private worldOptions: WorldOptions;
    addReference(start: StructureStart): void;
    addReferenceForStructure(pos: SectionPos, structure: Structure, reference: number, chunk: StructureAccess): void;
    checkStructurePresence(pos: ChunkPos, structure: Structure, placement: StructurePlacement, createReference: boolean): StructureCheckResult;
    fillStartsForStructure(structure: Structure, referencesForStructure: (Object | null)[], consumer: (param0: StructureStart) => void): void;
    forWorldGenRegion(region: WorldGenRegion): StructureManager;
    getAllStructuresAt(pos: BlockPos): Map<Structure, (Object | null)[]>;
    getStartForStructure(pos: SectionPos, structure: Structure, chunk: StructureAccess): StructureStart;
    getStructureAt(blockPos: BlockPos, structure: Structure): StructureStart;
    getStructureWithPieceAt(blockPos: BlockPos, predicate: (param0: Holder<Structure>) => kotlin.Boolean): StructureStart;
    getStructureWithPieceAt(blockPos: BlockPos, structures: Holder<T>[]): StructureStart;
    getStructureWithPieceAt(blockPos: BlockPos, structureTag: TagKey<Structure>): StructureStart;
    getStructureWithPieceAt(blockPos: BlockPos, structure: Structure): StructureStart;
    hasAnyStructureAt(pos: BlockPos): boolean;
    registryAccess(): RegistryAccess;
    setStartForStructure(pos: SectionPos, structure: Structure, start: StructureStart, chunk: StructureAccess): void;
    shouldGenerateStructures(): boolean;
    startsForStructure(pos: SectionPos, structure: Structure): StructureStart[];
    startsForStructure(pos: ChunkPos, matcher: (param0: Structure) => kotlin.Boolean): StructureStart[];
    structureHasPieceAt(blockPos: BlockPos, structureStart: StructureStart): boolean;
}