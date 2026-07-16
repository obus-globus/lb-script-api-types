import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { TreeDecorator } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/TreeDecorator.d.ts'
import type { TreeDecorator$Context } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/TreeDecorator$Context.d.ts'
import type { TreeDecoratorType } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/TreeDecoratorType.d.ts'
export class PaleMossDecorator extends TreeDecorator {
    static CODEC: MapCodec<PaleMossDecorator>;
    constructor(leavesProbability: number, trunkProbability: number, groundProbability: number)
    // private groundProbability: number;
    // private leavesProbability: number;
    // private trunkProbability: number;
    place(context: TreeDecorator$Context): void;
    type(): TreeDecoratorType<any>;
}