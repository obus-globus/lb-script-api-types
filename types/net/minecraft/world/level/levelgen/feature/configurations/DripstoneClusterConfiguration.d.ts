import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { FloatProvider } from '../../../../../../../net/minecraft/util/valueproviders/FloatProvider.d.ts'
import type { IntProvider } from '../../../../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { ConfiguredFeature } from '../../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
export class DripstoneClusterConfiguration extends Object implements FeatureConfiguration {
    static CODEC: Codec<DripstoneClusterConfiguration>;
    static NONE: NoneFeatureConfiguration;
    constructor(floorToCeilingSearchRange: number, height: IntProvider, radius: IntProvider, maxStalagmiteStalactiteHeightDiff: number, heightDeviation: number, dripstoneBlockLayerThickness: IntProvider, density: FloatProvider, wetness: FloatProvider, chanceOfDripstoneColumnAtMaxDistanceFromCenter: number, maxDistanceFromEdgeAffectingChanceOfDripstoneColumn: number, maxDistanceFromCenterAffectingHeightBias: number)
    chanceOfDripstoneColumnAtMaxDistanceFromCenter: number;
    density: FloatProvider;
    dripstoneBlockLayerThickness: IntProvider;
    floorToCeilingSearchRange: number;
    height: IntProvider;
    heightDeviation: number;
    maxDistanceFromCenterAffectingHeightBias: number;
    maxDistanceFromEdgeAffectingChanceOfDripstoneColumn: number;
    maxStalagmiteStalactiteHeightDiff: number;
    radius: IntProvider;
    wetness: FloatProvider;
    getSubFeatures(): Stream<Holder<ConfiguredFeature<Object, Object>>>;
}