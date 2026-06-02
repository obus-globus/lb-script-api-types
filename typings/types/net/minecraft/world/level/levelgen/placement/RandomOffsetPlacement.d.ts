import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { IntProvider } from '../../../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { PlacementContext } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementContext.d.ts'
import type { PlacementModifier } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementModifier.d.ts'
import type { PlacementModifierType } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementModifierType.d.ts'
export class RandomOffsetPlacement extends PlacementModifier {
    static CODEC: Codec<PlacementModifier>;
    static CODEC: MapCodec<RandomOffsetPlacement>;
    static horizontal(paramxzSpread: IntProvider): RandomOffsetPlacement;
    static of(paramxzSpread: IntProvider, paramySpread: IntProvider): RandomOffsetPlacement;
    static ofTriangle(paramxzRange: number, paramyRange: number): RandomOffsetPlacement;
    static vertical(paramySpread: IntProvider): RandomOffsetPlacement;
    private constructor(xzSpread: IntProvider, ySpread: IntProvider)
    // private xzSpread: IntProvider;
    // private ySpread: IntProvider;
    getPositions(context: PlacementContext, random: RandomSource, origin: BlockPos): Stream<BlockPos>;
    type(): PlacementModifierType<Object>;
}