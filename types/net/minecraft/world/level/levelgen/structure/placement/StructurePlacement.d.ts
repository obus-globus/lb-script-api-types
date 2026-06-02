import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3i } from '../../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { ChunkPos } from '../../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { ChunkGeneratorStructureState } from '../../../../../../../net/minecraft/world/level/chunk/ChunkGeneratorStructureState.d.ts'
import type { StructurePlacement$ExclusionZone } from '../../../../../../../net/minecraft/world/level/levelgen/structure/placement/StructurePlacement$ExclusionZone.d.ts'
import type { StructurePlacement$FrequencyReductionMethod } from '../../../../../../../net/minecraft/world/level/levelgen/structure/placement/StructurePlacement$FrequencyReductionMethod.d.ts'
import type { StructurePlacementType } from '../../../../../../../net/minecraft/world/level/levelgen/structure/placement/StructurePlacementType.d.ts'
export abstract class StructurePlacement extends Object {
    static CODEC: Codec<StructurePlacement>;
    constructor(locateOffset: Vec3i, frequencyReductionMethod: StructurePlacement$FrequencyReductionMethod, frequency: number, salt: number, exclusionZone: Optional<StructurePlacement$ExclusionZone>)
    // private exclusionZone: Optional<StructurePlacement$ExclusionZone>;
    // private frequency: number;
    // private frequencyReductionMethod: StructurePlacement$FrequencyReductionMethod;
    // private locateOffset: Vec3i;
    // private salt: number;
    applyAdditionalChunkRestrictions(sourceX: number, sourceZ: number, levelSeed: number): boolean;
    applyInteractionsWithOtherStructures(state: ChunkGeneratorStructureState, sourceX: number, sourceZ: number): boolean;
    exclusionZone(): Optional<StructurePlacement$ExclusionZone>;
    frequency(): number;
    frequencyReductionMethod(): StructurePlacement$FrequencyReductionMethod;
    getLocatePos(chunkPos: ChunkPos): BlockPos;
    isPlacementChunk(state: ChunkGeneratorStructureState, sourceX: number, sourceZ: number): boolean;
    isStructureChunk(state: ChunkGeneratorStructureState, sourceX: number, sourceZ: number): boolean;
    locateOffset(): Vec3i;
    salt(): number;
    type(): StructurePlacementType<Object>;
}