import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { TreeDecorator } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/TreeDecorator.d.ts'
import type { TreeDecorator$Context } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/TreeDecorator$Context.d.ts'
import type { TreeDecoratorType } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/TreeDecoratorType.d.ts'
export class TrunkVineDecorator extends TreeDecorator {
    static CODEC: MapCodec<TrunkVineDecorator>;
    static INSTANCE: TrunkVineDecorator;
    constructor()
    place(context: TreeDecorator$Context): void;
    type(): TreeDecoratorType<any>;
}