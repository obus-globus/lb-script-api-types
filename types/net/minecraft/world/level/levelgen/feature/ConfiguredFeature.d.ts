import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { WorldGenLevel } from '../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { ChunkGenerator } from '../../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { Feature } from '../../../../../../net/minecraft/world/level/levelgen/feature/Feature.d.ts'
import type { FeatureConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
export class ConfiguredFeature<FC extends FeatureConfiguration, F extends Feature<FC>> extends Record {
    static CODEC: Codec<Object>;
    static DIRECT_CODEC: Codec<Object>;
    static LIST_CODEC: Codec<Object>;
    constructor(feature: F, config: FC)
    // private config: FC;
    // private feature: F;
    config(): FC;
    equals(o: Object | null): boolean;
    feature(): F;
    getSubFeatures(): Stream<Holder<ConfiguredFeature<Object, Object>>>;
    hashCode(): number;
    place(level: WorldGenLevel, chunkGenerator: ChunkGenerator, random: RandomSource, origin: BlockPos): boolean;
    toString(): string;
}