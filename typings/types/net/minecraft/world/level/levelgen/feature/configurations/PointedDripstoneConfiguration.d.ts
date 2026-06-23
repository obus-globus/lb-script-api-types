import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { ConfiguredFeature } from '../../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
export class PointedDripstoneConfiguration extends Object implements FeatureConfiguration {
    static CODEC: Codec<PointedDripstoneConfiguration>;
    static NONE: NoneFeatureConfiguration;
    constructor(chanceOfTallerDripstone: number, chanceOfDirectionalSpread: number, chanceOfSpreadRadius2: number, chanceOfSpreadRadius3: number)
    chanceOfDirectionalSpread: number;
    chanceOfSpreadRadius2: number;
    chanceOfSpreadRadius3: number;
    chanceOfTallerDripstone: number;
    getSubFeatures(): Stream<Holder<ConfiguredFeature<any, any>>>;
}