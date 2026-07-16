import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { BlockPredicate } from '../../../../../../net/minecraft/world/level/levelgen/blockpredicates/BlockPredicate.d.ts'
import type { PlacementContext } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementContext.d.ts'
import type { PlacementModifier } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementModifier.d.ts'
import type { PlacementModifierType } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementModifierType.d.ts'
export class EnvironmentScanPlacement extends PlacementModifier {
    static CODEC: MapCodec<EnvironmentScanPlacement>;
    static scanningFor(paramdirectionOfSearch: Direction, paramtargetCondition: BlockPredicate, parammaxSteps: number): EnvironmentScanPlacement;
    static scanningFor(paramdirectionOfSearch: Direction, paramtargetCondition: BlockPredicate, paramallowedSearchCondition: BlockPredicate, parammaxSteps: number): EnvironmentScanPlacement;
    private constructor(directionOfSearch: Direction, targetCondition: BlockPredicate, allowedSearchCondition: BlockPredicate, maxSteps: number)
    // private allowedSearchCondition: BlockPredicate;
    // private directionOfSearch: Direction;
    // private maxSteps: number;
    // private targetCondition: BlockPredicate;
    getPositions(context: PlacementContext, random: RandomSource, origin: BlockPos): Stream<BlockPos>;
    type(): PlacementModifierType<any>;
}