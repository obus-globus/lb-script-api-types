import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BlockStateProvider } from '../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
export class GeodeBlockSettings extends Record {
    static CODEC: Codec<GeodeBlockSettings>;
    constructor(fillingProvider: BlockStateProvider, innerLayerProvider: BlockStateProvider, alternateInnerLayerProvider: BlockStateProvider, middleLayerProvider: BlockStateProvider, outerLayerProvider: BlockStateProvider, innerPlacements: BlockState[], cannotReplace: Holder<Block>[], invalidBlocks: Holder<Block>[])
    // private alternateInnerLayerProvider: BlockStateProvider;
    // private cannotReplace: Holder<Block>[];
    // private fillingProvider: BlockStateProvider;
    // private innerLayerProvider: BlockStateProvider;
    // private innerPlacements: BlockState[];
    // private invalidBlocks: Holder<Block>[];
    // private middleLayerProvider: BlockStateProvider;
    // private outerLayerProvider: BlockStateProvider;
    alternateInnerLayerProvider(): BlockStateProvider;
    cannotReplace(): Holder<Block>[];
    equals(o: Object | null): boolean;
    fillingProvider(): BlockStateProvider;
    hashCode(): number;
    innerLayerProvider(): BlockStateProvider;
    innerPlacements(): BlockState[];
    invalidBlocks(): Holder<Block>[];
    middleLayerProvider(): BlockStateProvider;
    outerLayerProvider(): BlockStateProvider;
    toString(): string;
}