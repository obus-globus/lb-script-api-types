import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { WorldGenLevel } from '../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { ChunkGenerator } from '../../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { ConfiguredFeature } from '../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { FeatureConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
export class FeaturePlaceContext<FC extends FeatureConfiguration> extends Object {
    constructor(topFeature: Optional<ConfiguredFeature<any, any>>, level: WorldGenLevel, chunkGenerator: ChunkGenerator, random: RandomSource, origin: BlockPos, config: FC)
    // private chunkGenerator: ChunkGenerator;
    // private config: FC;
    // private level: WorldGenLevel;
    // private origin: BlockPos;
    // private random: RandomSource;
    // private topFeature: Optional<ConfiguredFeature<any, any>>;
    chunkGenerator(): ChunkGenerator;
    config(): FC;
    level(): WorldGenLevel;
    origin(): BlockPos;
    random(): RandomSource;
    topFeature(): Optional<ConfiguredFeature<any, any>>;
}