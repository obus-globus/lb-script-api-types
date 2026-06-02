import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { ConfiguredFeature } from '../../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
export class UnderwaterMagmaConfiguration extends Object implements FeatureConfiguration {
    static CODEC: Codec<UnderwaterMagmaConfiguration>;
    static NONE: NoneFeatureConfiguration;
    constructor(floorSearchRange: number, placementRadiusAroundFloor: number, placementProbabilityPerValidPosition: number)
    floorSearchRange: number;
    placementProbabilityPerValidPosition: number;
    placementRadiusAroundFloor: number;
    getSubFeatures(): Stream<Holder<ConfiguredFeature<Object, Object>>>;
}