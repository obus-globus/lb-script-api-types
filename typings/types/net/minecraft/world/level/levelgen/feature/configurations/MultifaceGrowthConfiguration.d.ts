import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { ConfiguredFeature } from '../../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
export class MultifaceGrowthConfiguration extends Object implements FeatureConfiguration {
    static CODEC: Codec<MultifaceGrowthConfiguration>;
    static NONE: NoneFeatureConfiguration;
    constructor(placeBlock: Block, searchRange: number, canPlaceOnFloor: boolean, canPlaceOnCeiling: boolean, canPlaceOnWall: boolean, chanceOfSpreading: number, canBePlacedOn: Holder<Block>[])
    canBePlacedOn: Holder<Block>[];
    canPlaceOnCeiling: boolean;
    canPlaceOnFloor: boolean;
    canPlaceOnWall: boolean;
    chanceOfSpreading: number;
    placeBlock: Block;
    searchRange: number;
    // private validDirections: Direction[];
    getShuffledDirections(random: RandomSource): Direction[];
    getShuffledDirectionsExcept(random: RandomSource, excludeDirection: Direction): Direction[];
    getSubFeatures(): Stream<Holder<ConfiguredFeature<any, any>>>;
}