import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TagKey } from '../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BlockStateProvider } from '../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
export class GeodeBlockSettings extends Object {
    static CODEC: Codec<GeodeBlockSettings>;
    constructor(fillingProvider: BlockStateProvider, innerLayerProvider: BlockStateProvider, alternateInnerLayerProvider: BlockStateProvider, middleLayerProvider: BlockStateProvider, outerLayerProvider: BlockStateProvider, innerPlacements: BlockState[], cannotReplace: TagKey<Block>, invalidBlocks: TagKey<Block>)
    alternateInnerLayerProvider: BlockStateProvider;
    cannotReplace: TagKey<Block>;
    fillingProvider: BlockStateProvider;
    innerLayerProvider: BlockStateProvider;
    innerPlacements: BlockState[];
    invalidBlocks: TagKey<Block>;
    middleLayerProvider: BlockStateProvider;
    outerLayerProvider: BlockStateProvider;
}