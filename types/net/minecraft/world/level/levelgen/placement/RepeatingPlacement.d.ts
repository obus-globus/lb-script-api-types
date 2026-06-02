import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { PlacementContext } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementContext.d.ts'
import type { PlacementModifier } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementModifier.d.ts'
export abstract class RepeatingPlacement extends PlacementModifier {
    static CODEC: Codec<PlacementModifier>;
    constructor()
    count(random: RandomSource, origin: BlockPos): number;
    getPositions(context: PlacementContext, random: RandomSource, origin: BlockPos): Stream<BlockPos>;
}