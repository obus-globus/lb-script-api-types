import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TreeConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/TreeConfiguration.d.ts'
import type { FeatureSize } from '../../../../../../../net/minecraft/world/level/levelgen/feature/featuresize/FeatureSize.d.ts'
import type { FoliagePlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/foliageplacers/FoliagePlacer.d.ts'
import type { RootPlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/rootplacers/RootPlacer.d.ts'
import type { BlockStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
import type { TreeDecorator } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/TreeDecorator.d.ts'
import type { TrunkPlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/trunkplacers/TrunkPlacer.d.ts'
export class TreeConfiguration$TreeConfigurationBuilder extends Object {
    constructor(trunkProvider: BlockStateProvider, trunkPlacer: TrunkPlacer, foliageProvider: BlockStateProvider, foliagePlacer: FoliagePlacer, rootPlacer: Optional<RootPlacer>, minimumSize: FeatureSize, belowTrunkProvider: BlockStateProvider)
    constructor(trunkProvider: BlockStateProvider, trunkPlacer: TrunkPlacer, foliageProvider: BlockStateProvider, foliagePlacer: FoliagePlacer, minimumSize: FeatureSize, belowTrunkProvider: BlockStateProvider)
    // private belowTrunkProvider: BlockStateProvider;
    // private decorators: TreeDecorator[];
    // private foliagePlacer: FoliagePlacer;
    foliageProvider: BlockStateProvider;
    // private ignoreVines: boolean;
    // private minimumSize: FeatureSize;
    // private rootPlacer: Optional<RootPlacer>;
    // private trunkPlacer: TrunkPlacer;
    trunkProvider: BlockStateProvider;
    belowTrunkProvider(belowTrunkProvider: BlockStateProvider): TreeConfiguration$TreeConfigurationBuilder;
    build(): TreeConfiguration;
    decorators(decorators: TreeDecorator[]): TreeConfiguration$TreeConfigurationBuilder;
    ignoreVines(): TreeConfiguration$TreeConfigurationBuilder;
}