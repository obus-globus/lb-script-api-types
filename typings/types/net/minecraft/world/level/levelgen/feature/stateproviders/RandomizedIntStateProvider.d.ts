import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { IntProvider } from '../../../../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { WorldGenLevel } from '../../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { IntegerProperty } from '../../../../../../../net/minecraft/world/level/block/state/properties/IntegerProperty.d.ts'
import type { BlockStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
import type { BlockStateProviderType } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProviderType.d.ts'
import type { SimpleStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/SimpleStateProvider.d.ts'
export class RandomizedIntStateProvider extends BlockStateProvider {
    static CODEC: MapCodec<RandomizedIntStateProvider>;
    static simple(paramblock: Block): SimpleStateProvider;
    static simple(paramstate: BlockState): SimpleStateProvider;
    constructor(source: BlockStateProvider, propertyName: string, values: IntProvider)
    constructor(source: BlockStateProvider, property: IntegerProperty, values: IntProvider)
    // private property: IntegerProperty;
    // private propertyName: string;
    // private source: BlockStateProvider;
    // private values: IntProvider;
    getState(level: WorldGenLevel, random: RandomSource, pos: BlockPos): BlockState;
    type(): BlockStateProviderType<any>;
}