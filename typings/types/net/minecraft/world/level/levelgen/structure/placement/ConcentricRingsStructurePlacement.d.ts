import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { Vec3i } from '../../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { Biome } from '../../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { ChunkGeneratorStructureState } from '../../../../../../../net/minecraft/world/level/chunk/ChunkGeneratorStructureState.d.ts'
import type { StructurePlacement } from '../../../../../../../net/minecraft/world/level/levelgen/structure/placement/StructurePlacement.d.ts'
import type { StructurePlacement$ExclusionZone } from '../../../../../../../net/minecraft/world/level/levelgen/structure/placement/StructurePlacement$ExclusionZone.d.ts'
import type { StructurePlacement$FrequencyReductionMethod } from '../../../../../../../net/minecraft/world/level/levelgen/structure/placement/StructurePlacement$FrequencyReductionMethod.d.ts'
import type { StructurePlacementType } from '../../../../../../../net/minecraft/world/level/levelgen/structure/placement/StructurePlacementType.d.ts'
export class ConcentricRingsStructurePlacement extends StructurePlacement {
    static CODEC: Codec<StructurePlacement>;
    static CODEC: MapCodec<ConcentricRingsStructurePlacement>;
    constructor(distance: number, spread: number, count: number, preferredBiomes: Holder<Biome>[])
    constructor(locateOffset: Vec3i, frequencyReductionMethod: StructurePlacement$FrequencyReductionMethod, frequency: number, salt: number, exclusionZone: Optional<StructurePlacement$ExclusionZone>, distance: number, spread: number, count: number, preferredBiomes: Holder<Biome>[])
    // private count: number;
    // private distance: number;
    // private preferredBiomes: Holder<Biome>[];
    // private spread: number;
    count(): number;
    distance(): number;
    isPlacementChunk(generatorState: ChunkGeneratorStructureState, sourceX: number, sourceZ: number): boolean;
    preferredBiomes(): Holder<Biome>[];
    spread(): number;
    type(): StructurePlacementType<any>;
}