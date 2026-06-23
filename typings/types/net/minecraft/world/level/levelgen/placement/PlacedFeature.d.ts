import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { WorldGenLevel } from '../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { ChunkGenerator } from '../../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { ConfiguredFeature } from '../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { PlacementContext } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementContext.d.ts'
import type { PlacementModifier } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementModifier.d.ts'
export class PlacedFeature extends Record {
    static CODEC: Codec<Holder<PlacedFeature>>;
    static DIRECT_CODEC: Codec<PlacedFeature>;
    static LIST_CODEC: Codec<Holder<PlacedFeature>[]>;
    static LIST_OF_LISTS_CODEC: Codec<Holder<PlacedFeature>[][]>;
    constructor(feature: Holder<ConfiguredFeature<any, any>>, placement: PlacementModifier[])
    // private feature: Holder<ConfiguredFeature<any, any>>;
    // private placement: PlacementModifier[];
    equals(o: Object | null): boolean;
    feature(): Holder<ConfiguredFeature<any, any>>;
    getFeatures(): Stream<Holder<ConfiguredFeature<any, any>>>;
    hashCode(): number;
    place(level: WorldGenLevel, generator: ChunkGenerator, random: RandomSource, origin: BlockPos): boolean;
    placeWithBiomeCheck(level: WorldGenLevel, generator: ChunkGenerator, random: RandomSource, origin: BlockPos): boolean;
    // private placeWithContext(context: PlacementContext, random: RandomSource, origin: BlockPos): boolean;
    placement(): PlacementModifier[];
    toString(): string;
}