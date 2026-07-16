import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { PlacementModifierType } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementModifierType.d.ts'
import type { RepeatingPlacement } from '../../../../../../net/minecraft/world/level/levelgen/placement/RepeatingPlacement.d.ts'
export class NoiseBasedCountPlacement extends RepeatingPlacement {
    static CODEC: MapCodec<NoiseBasedCountPlacement>;
    static of(paramnoiseToCountRatio: number, paramnoiseFactor: number, paramnoiseOffset: number): NoiseBasedCountPlacement;
    private constructor(noiseToCountRatio: number, noiseFactor: number, noiseOffset: number)
    // private noiseFactor: number;
    // private noiseOffset: number;
    // private noiseToCountRatio: number;
    count(random: RandomSource, origin: BlockPos): number;
    type(): PlacementModifierType<any>;
}