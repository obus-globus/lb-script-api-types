import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
import type { TreeDecorator } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/TreeDecorator.d.ts'
import type { TreeDecorator$Context } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/TreeDecorator$Context.d.ts'
import type { TreeDecoratorType } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/TreeDecoratorType.d.ts'
export class AttachedToLogsDecorator extends TreeDecorator {
    static CODEC: Codec<TreeDecorator>;
    static CODEC: MapCodec<AttachedToLogsDecorator>;
    constructor(probability: number, blockProvider: BlockStateProvider, directions: Direction[])
    // private blockProvider: BlockStateProvider;
    // private directions: Direction[];
    // private probability: number;
    place(context: TreeDecorator$Context): void;
    type(): TreeDecoratorType<Object>;
}