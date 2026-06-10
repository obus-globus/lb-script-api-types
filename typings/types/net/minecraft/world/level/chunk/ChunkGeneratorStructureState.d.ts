import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { HolderLookup } from '../../../../../net/minecraft/core/HolderLookup.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { BiomeSource } from '../../../../../net/minecraft/world/level/biome/BiomeSource.d.ts'
import type { RandomState } from '../../../../../net/minecraft/world/level/levelgen/RandomState.d.ts'
import type { Structure } from '../../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
import type { StructureSet } from '../../../../../net/minecraft/world/level/levelgen/structure/StructureSet.d.ts'
import type { ConcentricRingsStructurePlacement } from '../../../../../net/minecraft/world/level/levelgen/structure/placement/ConcentricRingsStructurePlacement.d.ts'
import type { StructurePlacement } from '../../../../../net/minecraft/world/level/levelgen/structure/placement/StructurePlacement.d.ts'
export class ChunkGeneratorStructureState extends Object {
    static createForFlat(paramrandomState: RandomState, paramlevelSeed: number, parambiomeSource: BiomeSource, paramstructureOverrides: Stream<Holder<StructureSet>>): ChunkGeneratorStructureState;
    static createForNormal(paramrandomState: RandomState, paramlevelSeed: number, parambiomeSource: BiomeSource, paramallStructures: HolderLookup<StructureSet>): ChunkGeneratorStructureState;
    private constructor(randomState: RandomState, biomeSource: BiomeSource, levelSeed: number, concentricRingsSeed: number, possibleStructureSets: Holder<StructureSet>[])
    // private biomeSource: BiomeSource;
    // private concentricRingsSeed: number;
    // private hasGeneratedPositions: boolean;
    readonly levelSeed: number;
    // private placementsForStructure: Map<Structure, StructurePlacement[]>;
    // private possibleStructureSets: Holder<StructureSet>[];
    // private randomState: RandomState;
    // private ringPositions: Map<ConcentricRingsStructurePlacement, CompletableFuture<ChunkPos[]>>;
    ensureStructuresGenerated(): void;
    // private generatePositions(): void;
    // private generateRingPositions(structureSet: Holder<StructureSet>, placement: ConcentricRingsStructurePlacement): CompletableFuture<ChunkPos[]>;
    getLevelSeed(): number;
    getPlacementsForStructure(structure: Holder<Structure>): StructurePlacement[];
    getRingPositionsFor(placement: ConcentricRingsStructurePlacement): ChunkPos[];
    hasStructureChunkInRange(structureSet: Holder<StructureSet>, sourceX: number, sourceZ: number, range: number): boolean;
    possibleStructureSets(): Holder<StructureSet>[];
    randomState(): RandomState;
}