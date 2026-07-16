import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { WorldGenLevel } from '../../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BlockStateProviderType } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProviderType.d.ts'
import type { NoiseBasedStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/NoiseBasedStateProvider.d.ts'
import type { SimpleStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/SimpleStateProvider.d.ts'
import type { NormalNoise$NoiseParameters } from '../../../../../../../net/minecraft/world/level/levelgen/synth/NormalNoise$NoiseParameters.d.ts'
export class NoiseProvider extends NoiseBasedStateProvider {
    static CODEC: MapCodec<NoiseProvider>;
    static simple(paramblock: Block): SimpleStateProvider;
    static simple(paramstate: BlockState): SimpleStateProvider;
    constructor(seed: number, parameters: NormalNoise$NoiseParameters, scale: number, states: BlockState[])
    // private states: BlockState[];
    getRandomState(states: BlockState[], noiseValue: number): BlockState;
    getRandomState(states: BlockState[], pos: BlockPos, scale: number): BlockState;
    getState(level: WorldGenLevel, random: RandomSource, pos: BlockPos): BlockState;
    type(): BlockStateProviderType<any>;
}