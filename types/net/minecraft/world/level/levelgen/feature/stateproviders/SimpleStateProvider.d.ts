import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { WorldGenLevel } from '../../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BlockStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
import type { BlockStateProviderType } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProviderType.d.ts'
export class SimpleStateProvider extends BlockStateProvider {
    static CODEC: Codec<BlockStateProvider>;
    static CODEC: MapCodec<SimpleStateProvider>;
    static simple(paramblock: Block): SimpleStateProvider;
    static simple(paramstate: BlockState): SimpleStateProvider;
    constructor(state: BlockState)
    // private state: BlockState;
    getState(level: WorldGenLevel, random: RandomSource, pos: BlockPos): BlockState;
    type(): BlockStateProviderType<Object>;
}