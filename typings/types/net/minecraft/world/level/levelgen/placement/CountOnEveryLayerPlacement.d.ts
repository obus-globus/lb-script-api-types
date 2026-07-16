import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { IntProvider } from '../../../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { PlacementContext } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementContext.d.ts'
import type { PlacementModifier } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementModifier.d.ts'
import type { PlacementModifierType } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementModifierType.d.ts'
export class CountOnEveryLayerPlacement extends PlacementModifier {
    static CODEC: MapCodec<CountOnEveryLayerPlacement>;
    static of(paramcount: number): CountOnEveryLayerPlacement;
    static of(paramcount: IntProvider): CountOnEveryLayerPlacement;
    private constructor(count: IntProvider)
    // private count: IntProvider;
    getPositions(context: PlacementContext, random: RandomSource, origin: BlockPos): Stream<BlockPos>;
    type(): PlacementModifierType<any>;
}