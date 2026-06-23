import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { WorldGenLevel } from '../../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BlockPredicate } from '../../../../../../../net/minecraft/world/level/levelgen/blockpredicates/BlockPredicate.d.ts'
import type { BlockStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
import type { BlockStateProviderType } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProviderType.d.ts'
import type { RuleBasedStateProvider$Builder } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/RuleBasedStateProvider$Builder.d.ts'
import type { RuleBasedStateProvider$Rule } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/RuleBasedStateProvider$Rule.d.ts'
import type { SimpleStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/SimpleStateProvider.d.ts'
export class RuleBasedStateProvider extends BlockStateProvider {
    static CODEC: Codec<BlockStateProvider>;
    static CODEC: MapCodec<RuleBasedStateProvider>;
    static builder(): RuleBasedStateProvider$Builder;
    static builder(paramfallback: BlockStateProvider): RuleBasedStateProvider$Builder;
    static ifTrueThenProvide(paramifTrue: BlockPredicate, paramthenProvide: Block): RuleBasedStateProvider;
    static ifTrueThenProvide(paramifTrue: BlockPredicate, paramthenProvide: BlockStateProvider): RuleBasedStateProvider;
    static simple(paramblock: Block): SimpleStateProvider;
    static simple(paramstate: BlockState): SimpleStateProvider;
    private constructor(fallback: Optional<BlockStateProvider>, rules: RuleBasedStateProvider$Rule[])
    constructor(fallback: BlockStateProvider, rules: RuleBasedStateProvider$Rule[])
    // private fallback: BlockStateProvider;
    // private rules: RuleBasedStateProvider$Rule[];
    getOptionalState(level: WorldGenLevel, random: RandomSource, pos: BlockPos): BlockState;
    getState(level: WorldGenLevel, random: RandomSource, pos: BlockPos): BlockState;
    type(): BlockStateProviderType<any>;
}