import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { BlockPredicate } from '../../../../../../../net/minecraft/world/level/levelgen/blockpredicates/BlockPredicate.d.ts'
import type { ConfiguredFeature } from '../../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
import type { FeatureSize } from '../../../../../../../net/minecraft/world/level/levelgen/feature/featuresize/FeatureSize.d.ts'
import type { FoliagePlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/foliageplacers/FoliagePlacer.d.ts'
import type { RootPlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/rootplacers/RootPlacer.d.ts'
import type { BlockStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
import type { RuleBasedStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/RuleBasedStateProvider.d.ts'
import type { TreeDecorator } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/TreeDecorator.d.ts'
import type { TrunkPlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/trunkplacers/TrunkPlacer.d.ts'
export class TreeConfiguration extends Object implements FeatureConfiguration {
    static CAN_PLACE_BELOW_OVERWORLD_TRUNKS: BlockPredicate;
    static CODEC: Codec<TreeConfiguration>;
    static NONE: NoneFeatureConfiguration;
    static PLACE_BELOW_OVERWORLD_TRUNKS: RuleBasedStateProvider;
    constructor(trunkProvider: BlockStateProvider, trunkPlacer: TrunkPlacer, foliageProvider: BlockStateProvider, foliagePlacer: FoliagePlacer, rootPlacer: Optional<RootPlacer>, minimumSize: FeatureSize, decorators: TreeDecorator[], ignoreVines: boolean, belowTrunkProvider: BlockStateProvider)
    belowTrunkProvider: BlockStateProvider;
    decorators: TreeDecorator[];
    foliagePlacer: FoliagePlacer;
    foliageProvider: BlockStateProvider;
    ignoreVines: boolean;
    minimumSize: FeatureSize;
    rootPlacer: Optional<RootPlacer>;
    trunkPlacer: TrunkPlacer;
    trunkProvider: BlockStateProvider;
    getSubFeatures(): Stream<Holder<ConfiguredFeature<any, any>>>;
}