import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { ConfiguredFeature } from '../../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
export class NoneFeatureConfiguration extends Object implements FeatureConfiguration {
    static CODEC: Codec<NoneFeatureConfiguration>;
    static INSTANCE: NoneFeatureConfiguration;
    static NONE: NoneFeatureConfiguration;
    constructor()
    getSubFeatures(): Stream<Holder<ConfiguredFeature<Object, Object>>>;
}