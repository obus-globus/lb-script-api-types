import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { PlacementContext } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementContext.d.ts'
import type { PlacementModifier } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementModifier.d.ts'
import type { PlacementModifierType } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementModifierType.d.ts'
export class FixedPlacement extends PlacementModifier {
    static CODEC: MapCodec<FixedPlacement>;
    static of(...parampos: BlockPos[]): FixedPlacement;
    private constructor(positions: BlockPos[])
    // private positions: BlockPos[];
    getPositions(context: PlacementContext, random: RandomSource, origin: BlockPos): Stream<BlockPos>;
    type(): PlacementModifierType<any>;
}