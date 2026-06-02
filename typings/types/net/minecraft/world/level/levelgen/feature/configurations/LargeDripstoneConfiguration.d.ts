import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { FloatProvider } from '../../../../../../../net/minecraft/util/valueproviders/FloatProvider.d.ts'
import type { IntProvider } from '../../../../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { ConfiguredFeature } from '../../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
export class LargeDripstoneConfiguration extends Object implements FeatureConfiguration {
    static CODEC: Codec<LargeDripstoneConfiguration>;
    static NONE: NoneFeatureConfiguration;
    constructor(floorToCeilingSearchRange: number, columnRadius: IntProvider, heightScale: FloatProvider, maxColumnRadiusToCaveHeightRatio: number, stalactiteBluntness: FloatProvider, stalagmiteBluntness: FloatProvider, windSpeed: FloatProvider, minRadiusForWind: number, minBluntnessForWind: number)
    columnRadius: IntProvider;
    floorToCeilingSearchRange: number;
    heightScale: FloatProvider;
    maxColumnRadiusToCaveHeightRatio: number;
    minBluntnessForWind: number;
    minRadiusForWind: number;
    stalactiteBluntness: FloatProvider;
    stalagmiteBluntness: FloatProvider;
    windSpeed: FloatProvider;
    getSubFeatures(): Stream<Holder<ConfiguredFeature<Object, Object>>>;
}