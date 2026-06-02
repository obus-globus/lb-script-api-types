import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { ConfiguredFeature } from '../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { FeatureConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
import type { BlockStateProvider } from '../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
export class LakeFeature$Configuration extends Record implements FeatureConfiguration {
    static CODEC: Codec<LakeFeature$Configuration>;
    static NONE: NoneFeatureConfiguration;
    constructor(fluid: BlockStateProvider, barrier: BlockStateProvider)
    // private barrier: BlockStateProvider;
    // private fluid: BlockStateProvider;
    barrier(): BlockStateProvider;
    equals(o: Object | null): boolean;
    fluid(): BlockStateProvider;
    getSubFeatures(): Stream<Holder<ConfiguredFeature<Object, Object>>>;
    hashCode(): number;
    toString(): string;
}