import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { TagKey } from '../../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockPredicate } from '../../../../../../../net/minecraft/world/level/levelgen/blockpredicates/BlockPredicate.d.ts'
import type { ConfiguredFeature } from '../../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
import type { BlockStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
import type { PlacedFeature } from '../../../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
export class RootSystemConfiguration extends Object implements FeatureConfiguration {
    static CODEC: Codec<RootSystemConfiguration>;
    static NONE: NoneFeatureConfiguration;
    constructor(treeFeature: Holder<PlacedFeature>, requiredVerticalSpaceForTree: number, rootRadius: number, rootReplaceable: TagKey<Block>, rootStateProvider: BlockStateProvider, rootPlacementAttempts: number, rootColumnMaxHeight: number, hangingRootRadius: number, hangingRootsVerticalSpan: number, hangingRootStateProvider: BlockStateProvider, hangingRootPlacementAttempts: number, allowedVerticalWaterForTree: number, allowedTreePosition: BlockPredicate)
    allowedTreePosition: BlockPredicate;
    allowedVerticalWaterForTree: number;
    hangingRootPlacementAttempts: number;
    hangingRootRadius: number;
    hangingRootStateProvider: BlockStateProvider;
    hangingRootsVerticalSpan: number;
    requiredVerticalSpaceForTree: number;
    rootColumnMaxHeight: number;
    rootPlacementAttempts: number;
    rootRadius: number;
    rootReplaceable: TagKey<Block>;
    rootStateProvider: BlockStateProvider;
    treeFeature: Holder<PlacedFeature>;
    getSubFeatures(): Stream<Holder<ConfiguredFeature<any, any>>>;
}