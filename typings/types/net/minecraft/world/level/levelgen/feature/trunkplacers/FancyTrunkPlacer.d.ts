import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction$Axis } from '../../../../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { WorldGenLevel } from '../../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { TreeConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/TreeConfiguration.d.ts'
import type { FoliagePlacer$FoliageAttachment } from '../../../../../../../net/minecraft/world/level/levelgen/feature/foliageplacers/FoliagePlacer$FoliageAttachment.d.ts'
import type { FancyTrunkPlacer$FoliageCoords } from '../../../../../../../net/minecraft/world/level/levelgen/feature/trunkplacers/FancyTrunkPlacer$FoliageCoords.d.ts'
import type { TrunkPlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/trunkplacers/TrunkPlacer.d.ts'
import type { TrunkPlacerType } from '../../../../../../../net/minecraft/world/level/levelgen/feature/trunkplacers/TrunkPlacerType.d.ts'
export class FancyTrunkPlacer extends TrunkPlacer {
    static CODEC: Codec<TrunkPlacer>;
    static CODEC: MapCodec<FancyTrunkPlacer>;
    static MAX_HEIGHT: number;
    constructor(baseHeight: number, heightRandA: number, heightRandB: number)
    // private getLogAxis(startPos: BlockPos, blockPos: BlockPos): Direction$Axis;
    // private getSteps(pos: BlockPos): number;
    // private makeBranches(level: WorldGenLevel, trunkSetter: (param0: BlockPos, param1: BlockState) => void, random: RandomSource, height: number, origin: BlockPos, foliageCoords: FancyTrunkPlacer$FoliageCoords[], config: TreeConfiguration): void;
    // private makeLimb(level: WorldGenLevel, trunkSetter: (param0: BlockPos, param1: BlockState) => void, random: RandomSource, startPos: BlockPos, endPos: BlockPos, doPlace: boolean, config: TreeConfiguration): boolean;
    placeTrunk(level: WorldGenLevel, trunkSetter: (param0: BlockPos, param1: BlockState) => void, random: RandomSource, treeHeight: number, origin: BlockPos, config: TreeConfiguration): FoliagePlacer$FoliageAttachment[];
    // private trimBranches(height: number, localY: number): boolean;
    type(): TrunkPlacerType<Object>;
}