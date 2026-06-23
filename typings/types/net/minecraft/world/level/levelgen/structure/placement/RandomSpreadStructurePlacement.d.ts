import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Vec3i } from '../../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { ChunkPos } from '../../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { ChunkGeneratorStructureState } from '../../../../../../../net/minecraft/world/level/chunk/ChunkGeneratorStructureState.d.ts'
import type { RandomSpreadType } from '../../../../../../../net/minecraft/world/level/levelgen/structure/placement/RandomSpreadType.d.ts'
import type { StructurePlacement } from '../../../../../../../net/minecraft/world/level/levelgen/structure/placement/StructurePlacement.d.ts'
import type { StructurePlacement$ExclusionZone } from '../../../../../../../net/minecraft/world/level/levelgen/structure/placement/StructurePlacement$ExclusionZone.d.ts'
import type { StructurePlacement$FrequencyReductionMethod } from '../../../../../../../net/minecraft/world/level/levelgen/structure/placement/StructurePlacement$FrequencyReductionMethod.d.ts'
import type { StructurePlacementType } from '../../../../../../../net/minecraft/world/level/levelgen/structure/placement/StructurePlacementType.d.ts'
export class RandomSpreadStructurePlacement extends StructurePlacement {
    static CODEC: Codec<StructurePlacement>;
    static CODEC: MapCodec<RandomSpreadStructurePlacement>;
    constructor(spacing: number, separation: number, spreadType: RandomSpreadType, salt: number)
    constructor(locateOffset: Vec3i, frequencyReductionMethod: StructurePlacement$FrequencyReductionMethod, frequency: number, salt: number, exclusionZone: Optional<StructurePlacement$ExclusionZone>, spacing: number, separation: number, spreadType: RandomSpreadType)
    // private separation: number;
    // private spacing: number;
    // private spreadType: RandomSpreadType;
    getPotentialStructureChunk(seed: number, sourceX: number, sourceZ: number): ChunkPos;
    isPlacementChunk(state: ChunkGeneratorStructureState, sourceX: number, sourceZ: number): boolean;
    separation(): number;
    spacing(): number;
    spreadType(): RandomSpreadType;
    type(): StructurePlacementType<any>;
}