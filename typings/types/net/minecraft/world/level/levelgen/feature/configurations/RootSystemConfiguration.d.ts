import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockPredicate } from '../../../../../../../net/minecraft/world/level/levelgen/blockpredicates/BlockPredicate.d.ts'
import type { ConfiguredFeature } from '../../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
import type { BlockStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
import type { PlacedFeature } from '../../../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
export class RootSystemConfiguration extends Record implements FeatureConfiguration {
    static CODEC: Codec<RootSystemConfiguration>;
    static NONE: NoneFeatureConfiguration;
    constructor(treeFeature: Holder<PlacedFeature>, requiredVerticalSpaceForTree: number, levelTestDistance: number, maxLevelDeviation: number, rootRadius: number, rootReplaceable: Holder<Block>[], rootStateProvider: BlockStateProvider, rootPlacementAttempts: number, rootColumnMaxHeight: number, hangingRootRadius: number, hangingRootsVerticalSpan: number, hangingRootStateProvider: BlockStateProvider, hangingRootPlacementAttempts: number, allowedVerticalWaterForTree: number, allowedTreePosition: BlockPredicate)
    // private allowedTreePosition: BlockPredicate;
    // private allowedVerticalWaterForTree: number;
    // private hangingRootPlacementAttempts: number;
    // private hangingRootRadius: number;
    // private hangingRootStateProvider: BlockStateProvider;
    // private hangingRootsVerticalSpan: number;
    // private levelTestDistance: number;
    // private maxLevelDeviation: number;
    // private requiredVerticalSpaceForTree: number;
    // private rootColumnMaxHeight: number;
    // private rootPlacementAttempts: number;
    // private rootRadius: number;
    // private rootReplaceable: Holder<Block>[];
    // private rootStateProvider: BlockStateProvider;
    // private treeFeature: Holder<PlacedFeature>;
    allowedTreePosition(): BlockPredicate;
    allowedVerticalWaterForTree(): number;
    equals(o: Object | null): boolean;
    getSubFeatures(): Stream<Holder<ConfiguredFeature<any, any>>>;
    hangingRootPlacementAttempts(): number;
    hangingRootRadius(): number;
    hangingRootStateProvider(): BlockStateProvider;
    hangingRootsVerticalSpan(): number;
    hashCode(): number;
    levelTestDistance(): number;
    maxLevelDeviation(): number;
    requiredVerticalSpaceForTree(): number;
    rootColumnMaxHeight(): number;
    rootPlacementAttempts(): number;
    rootRadius(): number;
    rootReplaceable(): Holder<Block>[];
    rootStateProvider(): BlockStateProvider;
    toString(): string;
    treeFeature(): Holder<PlacedFeature>;
}