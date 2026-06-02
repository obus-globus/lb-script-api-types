import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { WorldGenLevel } from '../../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BlockStateProviderType } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProviderType.d.ts'
import type { SimpleStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/SimpleStateProvider.d.ts'
export abstract class BlockStateProvider extends Object {
    static CODEC: Codec<BlockStateProvider>;
    static simple(paramblock: Block): SimpleStateProvider;
    static simple(paramstate: BlockState): SimpleStateProvider;
    constructor()
    getOptionalState(level: WorldGenLevel, random: RandomSource, pos: BlockPos): BlockState;
    getState(level: WorldGenLevel, random: RandomSource, pos: BlockPos): BlockState;
    type(): BlockStateProviderType<Object>;
}