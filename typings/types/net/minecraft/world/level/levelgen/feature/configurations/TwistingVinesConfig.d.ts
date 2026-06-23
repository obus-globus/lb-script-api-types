import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { ConfiguredFeature } from '../../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
export class TwistingVinesConfig extends Record implements FeatureConfiguration {
    static CODEC: Codec<TwistingVinesConfig>;
    static NONE: NoneFeatureConfiguration;
    // private maxHeight: number;
    // private spreadHeight: number;
    // private spreadWidth: number;
    equals(o: Object | null): boolean;
    getSubFeatures(): Stream<Holder<ConfiguredFeature<any, any>>>;
    hashCode(): number;
    maxHeight(): number;
    spreadHeight(): number;
    spreadWidth(): number;
    toString(): string;
}