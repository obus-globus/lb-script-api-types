import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { IntProvider } from '../../../../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { LevelSimulatedReader } from '../../../../../../../net/minecraft/world/level/LevelSimulatedReader.d.ts'
import type { WorldGenLevel } from '../../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { TreeConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/TreeConfiguration.d.ts'
import type { AboveRootPlacement } from '../../../../../../../net/minecraft/world/level/levelgen/feature/rootplacers/AboveRootPlacement.d.ts'
import type { MangroveRootPlacement } from '../../../../../../../net/minecraft/world/level/levelgen/feature/rootplacers/MangroveRootPlacement.d.ts'
import type { RootPlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/rootplacers/RootPlacer.d.ts'
import type { RootPlacerType } from '../../../../../../../net/minecraft/world/level/levelgen/feature/rootplacers/RootPlacerType.d.ts'
import type { BlockStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
export class MangroveRootPlacer extends RootPlacer {
    static CODEC: MapCodec<MangroveRootPlacer>;
    static ROOT_LENGTH_LIMIT: number;
    static ROOT_WIDTH_LIMIT: number;
    constructor(trunkOffsetY: IntProvider, rootProvider: BlockStateProvider, aboveRootPlacement: Optional<AboveRootPlacement>, mangroveRootPlacement: MangroveRootPlacement)
    // private mangroveRootPlacement: MangroveRootPlacement;
    canPlaceRoot(level: LevelSimulatedReader, pos: BlockPos): boolean;
    placeRoot(level: WorldGenLevel, rootSetter: (param0: BlockPos, param1: BlockState) => void, random: RandomSource, pos: BlockPos, config: TreeConfiguration): void;
    placeRoots(level: WorldGenLevel, rootSetter: (param0: BlockPos, param1: BlockState) => void, random: RandomSource, origin: BlockPos, trunkOrigin: BlockPos, config: TreeConfiguration): boolean;
    potentialRootPositions(pos: BlockPos, prevDir: Direction, random: RandomSource, rootOrigin: BlockPos): BlockPos[];
    // private simulateRoots(level: LevelSimulatedReader, random: RandomSource, rootPos: BlockPos, dir: Direction, rootOrigin: BlockPos, rootPositions: BlockPos[], layer: number): boolean;
    type(): RootPlacerType<any>;
}