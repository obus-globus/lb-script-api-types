import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { InclusiveRange } from '../../../../../../../net/minecraft/util/InclusiveRange.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { WorldGenLevel } from '../../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BlockStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
import type { BlockStateProviderType } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProviderType.d.ts'
import type { NoiseProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/NoiseProvider.d.ts'
import type { SimpleStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/SimpleStateProvider.d.ts'
import type { NormalNoise } from '../../../../../../../net/minecraft/world/level/levelgen/synth/NormalNoise.d.ts'
import type { NormalNoise$NoiseParameters } from '../../../../../../../net/minecraft/world/level/levelgen/synth/NormalNoise$NoiseParameters.d.ts'
export class DualNoiseProvider extends NoiseProvider {
    static CODEC: Codec<BlockStateProvider>;
    static CODEC: MapCodec<DualNoiseProvider>;
    static CODEC: MapCodec<NoiseProvider>;
    static simple(paramblock: Block): SimpleStateProvider;
    static simple(paramstate: BlockState): SimpleStateProvider;
    constructor(variety: InclusiveRange<number>, slowNoiseParameters: NormalNoise$NoiseParameters, slowScale: number, seed: number, parameters: NormalNoise$NoiseParameters, scale: number, states: BlockState[])
    // private slowNoise: NormalNoise;
    // private slowNoiseParameters: NormalNoise$NoiseParameters;
    // private slowScale: number;
    // private variety: InclusiveRange<number>;
    getSlowNoiseValue(pos: BlockPos): number;
    getState(level: WorldGenLevel, random: RandomSource, pos: BlockPos): BlockState;
    type(): BlockStateProviderType<Object>;
}