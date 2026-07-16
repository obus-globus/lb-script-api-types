import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { PlacementModifierType } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementModifierType.d.ts'
import type { RepeatingPlacement } from '../../../../../../net/minecraft/world/level/levelgen/placement/RepeatingPlacement.d.ts'
export class NoiseThresholdCountPlacement extends RepeatingPlacement {
    static CODEC: MapCodec<NoiseThresholdCountPlacement>;
    static of(paramnoiseLevel: number, parambelowNoise: number, paramaboveNoise: number): NoiseThresholdCountPlacement;
    private constructor(noiseLevel: number, belowNoise: number, aboveNoise: number)
    // private aboveNoise: number;
    // private belowNoise: number;
    // private noiseLevel: number;
    count(random: RandomSource, origin: BlockPos): number;
    type(): PlacementModifierType<any>;
}