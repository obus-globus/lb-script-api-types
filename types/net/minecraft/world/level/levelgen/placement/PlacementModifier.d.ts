import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { PlacementContext } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementContext.d.ts'
import type { PlacementModifierType } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementModifierType.d.ts'
export abstract class PlacementModifier extends Object {
    static CODEC: Codec<PlacementModifier>;
    constructor()
    getPositions(context: PlacementContext, random: RandomSource, origin: BlockPos): Stream<BlockPos>;
    type(): PlacementModifierType<Object>;
}