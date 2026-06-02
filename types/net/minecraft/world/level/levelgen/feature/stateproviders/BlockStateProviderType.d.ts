import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
import type { DualNoiseProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/DualNoiseProvider.d.ts'
import type { NoiseProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/NoiseProvider.d.ts'
import type { NoiseThresholdProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/NoiseThresholdProvider.d.ts'
import type { RandomizedIntStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/RandomizedIntStateProvider.d.ts'
import type { RotatedBlockProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/RotatedBlockProvider.d.ts'
import type { RuleBasedStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/RuleBasedStateProvider.d.ts'
import type { SimpleStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/SimpleStateProvider.d.ts'
import type { WeightedStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/WeightedStateProvider.d.ts'
export class BlockStateProviderType<P extends BlockStateProvider> extends Object {
    static DUAL_NOISE_PROVIDER: BlockStateProviderType<DualNoiseProvider>;
    static NOISE_PROVIDER: BlockStateProviderType<NoiseProvider>;
    static NOISE_THRESHOLD_PROVIDER: BlockStateProviderType<NoiseThresholdProvider>;
    static RANDOMIZED_INT_STATE_PROVIDER: BlockStateProviderType<RandomizedIntStateProvider>;
    static ROTATED_BLOCK_PROVIDER: BlockStateProviderType<RotatedBlockProvider>;
    static RULE_BASED_STATE_PROVIDER: BlockStateProviderType<RuleBasedStateProvider>;
    static SIMPLE_STATE_PROVIDER: BlockStateProviderType<SimpleStateProvider>;
    static WEIGHTED_STATE_PROVIDER: BlockStateProviderType<WeightedStateProvider>;
    constructor(codec: MapCodec<P>)
    // private codec: MapCodec<P>;
    codec(): MapCodec<P>;
}