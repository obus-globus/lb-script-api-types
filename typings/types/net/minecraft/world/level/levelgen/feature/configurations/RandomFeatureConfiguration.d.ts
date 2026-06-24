import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { ConfiguredFeature } from '../../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { WeightedPlacedFeature } from '../../../../../../../net/minecraft/world/level/levelgen/feature/WeightedPlacedFeature.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
import type { PlacedFeature } from '../../../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
export class RandomFeatureConfiguration extends Record implements FeatureConfiguration {
    static CODEC: Codec<RandomFeatureConfiguration>;
    static NONE: NoneFeatureConfiguration;
    constructor(features: WeightedPlacedFeature[], defaultFeature: Holder<PlacedFeature>)
    // private defaultFeature: Holder<PlacedFeature>;
    // private features: WeightedPlacedFeature[];
    defaultFeature(): Holder<PlacedFeature>;
    equals(o: Object | null): boolean;
    features(): WeightedPlacedFeature[];
    getSubFeatures(): Stream<Holder<ConfiguredFeature<any, any>>>;
    hashCode(): number;
    toString(): string;
}