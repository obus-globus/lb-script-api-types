import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { IntProvider } from '../../../../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { BlockPredicate } from '../../../../../../../net/minecraft/world/level/levelgen/blockpredicates/BlockPredicate.d.ts'
import type { ConfiguredFeature } from '../../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
import type { BlockStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
export class DiskConfiguration extends Record implements FeatureConfiguration {
    static CODEC: Codec<DiskConfiguration>;
    static NONE: NoneFeatureConfiguration;
    // private halfHeight: number;
    // private radius: IntProvider;
    // private stateProvider: BlockStateProvider;
    // private target: BlockPredicate;
    equals(o: Object | null): boolean;
    getSubFeatures(): Stream<Holder<ConfiguredFeature<any, any>>>;
    halfHeight(): number;
    hashCode(): number;
    radius(): IntProvider;
    stateProvider(): BlockStateProvider;
    target(): BlockPredicate;
    toString(): string;
}