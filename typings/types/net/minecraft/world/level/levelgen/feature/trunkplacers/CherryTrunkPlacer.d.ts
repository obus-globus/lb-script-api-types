import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { IntProvider } from '../../../../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { UniformInt } from '../../../../../../../net/minecraft/util/valueproviders/UniformInt.d.ts'
import type { WorldGenLevel } from '../../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { TreeConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/TreeConfiguration.d.ts'
import type { FoliagePlacer$FoliageAttachment } from '../../../../../../../net/minecraft/world/level/levelgen/feature/foliageplacers/FoliagePlacer$FoliageAttachment.d.ts'
import type { TrunkPlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/trunkplacers/TrunkPlacer.d.ts'
import type { TrunkPlacerType } from '../../../../../../../net/minecraft/world/level/levelgen/feature/trunkplacers/TrunkPlacerType.d.ts'
export class CherryTrunkPlacer extends TrunkPlacer {
    static CODEC: MapCodec<CherryTrunkPlacer>;
    static MAX_HEIGHT: number;
    constructor(baseHeight: number, heightRandA: number, heightRandB: number, branchCount: IntProvider, branchHorizontalLength: IntProvider, branchStartOffsetFromTop: UniformInt, branchEndOffsetFromTop: IntProvider)
    // private branchCount: IntProvider;
    // private branchEndOffsetFromTop: IntProvider;
    // private branchHorizontalLength: IntProvider;
    // private branchStartOffsetFromTop: UniformInt;
    // private secondBranchStartOffsetFromTop: UniformInt;
    // private generateBranch(level: WorldGenLevel, trunkSetter: (param0: BlockPos, param1: BlockState) => void, random: RandomSource, treeHeight: number, origin: BlockPos, config: TreeConfiguration, sidewaysStateModifier: (param0: BlockState) => BlockState, branchDirection: Direction, offsetFromOrigin: number, middleContinuesUpwards: boolean, logPos: BlockPos$MutableBlockPos): FoliagePlacer$FoliageAttachment;
    placeTrunk(level: WorldGenLevel, trunkSetter: (param0: BlockPos, param1: BlockState) => void, random: RandomSource, treeHeight: number, origin: BlockPos, config: TreeConfiguration): FoliagePlacer$FoliageAttachment[];
    type(): TrunkPlacerType<any>;
}