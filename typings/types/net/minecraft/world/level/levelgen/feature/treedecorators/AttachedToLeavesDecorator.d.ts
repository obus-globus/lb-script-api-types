import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
import type { TreeDecorator } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/TreeDecorator.d.ts'
import type { TreeDecorator$Context } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/TreeDecorator$Context.d.ts'
import type { TreeDecoratorType } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/TreeDecoratorType.d.ts'
export class AttachedToLeavesDecorator extends TreeDecorator {
    static CODEC: Codec<TreeDecorator>;
    static CODEC: MapCodec<AttachedToLeavesDecorator>;
    constructor(probability: number, exclusionRadiusXZ: number, exclusionRadiusY: number, blockProvider: BlockStateProvider, requiredEmptyBlocks: number, directions: Direction[])
    // private blockProvider: BlockStateProvider;
    // private directions: Direction[];
    // private exclusionRadiusXZ: number;
    // private exclusionRadiusY: number;
    // private probability: number;
    // private requiredEmptyBlocks: number;
    // private hasRequiredEmptyBlocks(context: TreeDecorator$Context, leafPos: BlockPos, direction: Direction): boolean;
    place(context: TreeDecorator$Context): void;
    type(): TreeDecoratorType<Object>;
}