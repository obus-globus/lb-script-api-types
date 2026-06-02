import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { VerticalAnchor } from '../../../../../../net/minecraft/world/level/levelgen/VerticalAnchor.d.ts'
import type { HeightProvider } from '../../../../../../net/minecraft/world/level/levelgen/heightproviders/HeightProvider.d.ts'
import type { PlacementContext } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementContext.d.ts'
import type { PlacementModifier } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementModifier.d.ts'
import type { PlacementModifierType } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementModifierType.d.ts'
export class HeightRangePlacement extends PlacementModifier {
    static CODEC: Codec<PlacementModifier>;
    static CODEC: MapCodec<HeightRangePlacement>;
    static of(paramheight: HeightProvider): HeightRangePlacement;
    static triangle(paramminInclusive: VerticalAnchor, parammaxInclusive: VerticalAnchor): HeightRangePlacement;
    static uniform(paramminInclusive: VerticalAnchor, parammaxInclusive: VerticalAnchor): HeightRangePlacement;
    private constructor(height: HeightProvider)
    // private height: HeightProvider;
    getPositions(context: PlacementContext, random: RandomSource, origin: BlockPos): Stream<BlockPos>;
    type(): PlacementModifierType<Object>;
}