import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { IntProvider } from '../../../../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { LevelSimulatedReader } from '../../../../../../../net/minecraft/world/level/LevelSimulatedReader.d.ts'
import type { WorldGenLevel } from '../../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { TreeConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/TreeConfiguration.d.ts'
import type { AboveRootPlacement } from '../../../../../../../net/minecraft/world/level/levelgen/feature/rootplacers/AboveRootPlacement.d.ts'
import type { RootPlacerType } from '../../../../../../../net/minecraft/world/level/levelgen/feature/rootplacers/RootPlacerType.d.ts'
import type { BlockStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
export abstract class RootPlacer extends Object {
    static CODEC: Codec<RootPlacer>;
    constructor(trunkOffsetY: IntProvider, rootProvider: BlockStateProvider, aboveRootPlacement: Optional<AboveRootPlacement>)
    // private aboveRootPlacement: Optional<AboveRootPlacement>;
    // private rootProvider: BlockStateProvider;
    // private trunkOffsetY: IntProvider;
    canPlaceRoot(level: LevelSimulatedReader, pos: BlockPos): boolean;
    getPotentiallyWaterloggedState(level: LevelSimulatedReader, pos: BlockPos, state: BlockState): BlockState;
    getTrunkOrigin(origin: BlockPos, random: RandomSource): BlockPos;
    placeRoot(level: WorldGenLevel, rootSetter: (param0: BlockPos, param1: BlockState) => void, random: RandomSource, pos: BlockPos, config: TreeConfiguration): void;
    placeRoots(level: WorldGenLevel, rootSetter: (param0: BlockPos, param1: BlockState) => void, random: RandomSource, origin: BlockPos, trunkOrigin: BlockPos, config: TreeConfiguration): boolean;
    type(): RootPlacerType<any>;
}