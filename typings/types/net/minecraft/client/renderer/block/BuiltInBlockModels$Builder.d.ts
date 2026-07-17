import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockColors } from '../../../../../net/minecraft/client/color/block/BlockColors.d.ts'
import type { BuiltInBlockModels$ModelFactory } from '../../../../../net/minecraft/client/renderer/block/BuiltInBlockModels$ModelFactory.d.ts'
import type { BlockModel$Unbaked } from '../../../../../net/minecraft/client/renderer/block/model/BlockModel$Unbaked.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class BuiltInBlockModels$Builder extends Object {
    private constructor(blockColors: BlockColors)
    // private blockColors: BlockColors;
    // private result: JavaMap<BlockState, BlockModel$Unbaked>;
    build(): JavaMap<BlockState, BlockModel$Unbaked>;
    // private put(factory: (param0: BlockColors, param1: BlockState) => BlockModel$Unbaked, block: Block): void;
    // private put(factory: (param0: BlockColors, param1: BlockState) => BlockModel$Unbaked, a: Block, b: Block): void;
    // private put(specialModel: BlockModel$Unbaked, block: Block): void;
}