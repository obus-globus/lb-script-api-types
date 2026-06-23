import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { IntProvider } from '../../../../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { ConfiguredFeature } from '../../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
import type { BlockStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
import type { TreeDecorator } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/TreeDecorator.d.ts'
export class FallenTreeConfiguration extends Object implements FeatureConfiguration {
    static CODEC: Codec<FallenTreeConfiguration>;
    static NONE: NoneFeatureConfiguration;
    constructor(trunkProvider: BlockStateProvider, logLength: IntProvider, stumpDecorators: TreeDecorator[], logDecorators: TreeDecorator[])
    logDecorators: TreeDecorator[];
    logLength: IntProvider;
    stumpDecorators: TreeDecorator[];
    trunkProvider: BlockStateProvider;
    getSubFeatures(): Stream<Holder<ConfiguredFeature<any, any>>>;
}