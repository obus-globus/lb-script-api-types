import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BlockStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
import type { SimpleStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/SimpleStateProvider.d.ts'
import type { NormalNoise } from '../../../../../../../net/minecraft/world/level/levelgen/synth/NormalNoise.d.ts'
import type { NormalNoise$NoiseParameters } from '../../../../../../../net/minecraft/world/level/levelgen/synth/NormalNoise$NoiseParameters.d.ts'
export abstract class NoiseBasedStateProvider extends BlockStateProvider {
    static CODEC: Codec<BlockStateProvider>;
    static simple(paramblock: Block): SimpleStateProvider;
    static simple(paramstate: BlockState): SimpleStateProvider;
    constructor(seed: number, parameters: NormalNoise$NoiseParameters, scale: number)
    // private noise: NormalNoise;
    // private parameters: NormalNoise$NoiseParameters;
    // private scale: number;
    // private seed: number;
    getNoiseValue(pos: BlockPos, scale: number): number;
}