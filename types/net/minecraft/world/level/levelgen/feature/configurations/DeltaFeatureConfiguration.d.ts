import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { IntProvider } from '../../../../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ConfiguredFeature } from '../../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
export class DeltaFeatureConfiguration extends Object implements FeatureConfiguration {
    static CODEC: Codec<DeltaFeatureConfiguration>;
    static NONE: NoneFeatureConfiguration;
    constructor(contents: BlockState, rim: BlockState, size: IntProvider, rimSize: IntProvider)
    // private contents: BlockState;
    // private rim: BlockState;
    // private rimSize: IntProvider;
    // private size: IntProvider;
    contents(): BlockState;
    getSubFeatures(): Stream<Holder<ConfiguredFeature<Object, Object>>>;
    rim(): BlockState;
    rimSize(): IntProvider;
    size(): IntProvider;
}