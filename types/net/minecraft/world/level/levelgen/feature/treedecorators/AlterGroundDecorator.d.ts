import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
import type { TreeDecorator } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/TreeDecorator.d.ts'
import type { TreeDecorator$Context } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/TreeDecorator$Context.d.ts'
import type { TreeDecoratorType } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/TreeDecoratorType.d.ts'
export class AlterGroundDecorator extends TreeDecorator {
    static CODEC: Codec<TreeDecorator>;
    static CODEC: MapCodec<AlterGroundDecorator>;
    constructor(provider: BlockStateProvider)
    // private provider: BlockStateProvider;
    place(context: TreeDecorator$Context): void;
    // private placeBlockAt(context: TreeDecorator$Context, pos: BlockPos): void;
    // private placeCircle(context: TreeDecorator$Context, pos: BlockPos): void;
    type(): TreeDecoratorType<Object>;
}