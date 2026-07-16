import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { TreeDecorator } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/TreeDecorator.d.ts'
import type { TreeDecorator$Context } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/TreeDecorator$Context.d.ts'
import type { TreeDecoratorType } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/TreeDecoratorType.d.ts'
export class CreakingHeartDecorator extends TreeDecorator {
    static CODEC: MapCodec<CreakingHeartDecorator>;
    constructor(probability: number)
    // private probability: number;
    place(context: TreeDecorator$Context): void;
    type(): TreeDecoratorType<any>;
}