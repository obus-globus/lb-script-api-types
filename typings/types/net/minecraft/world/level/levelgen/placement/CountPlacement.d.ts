import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { IntProvider } from '../../../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { PlacementModifier } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementModifier.d.ts'
import type { PlacementModifierType } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementModifierType.d.ts'
import type { RepeatingPlacement } from '../../../../../../net/minecraft/world/level/levelgen/placement/RepeatingPlacement.d.ts'
export class CountPlacement extends RepeatingPlacement {
    static CODEC: Codec<PlacementModifier>;
    static CODEC: MapCodec<CountPlacement>;
    static of(paramcount: number): CountPlacement;
    static of(paramcount: IntProvider): CountPlacement;
    private constructor(count: IntProvider)
    // private count: IntProvider;
    count(random: RandomSource, origin: BlockPos): number;
    type(): PlacementModifierType<any>;
}