import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockTintSource } from '../../../../../../net/minecraft/client/color/block/BlockTintSource.d.ts'
import type { BlockModelRenderState } from '../../../../../../net/minecraft/client/renderer/block/BlockModelRenderState.d.ts'
import type { BlockStateModel } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { BlockDisplayContext } from '../../../../../../net/minecraft/client/renderer/block/model/BlockDisplayContext.d.ts'
import type { BlockModel } from '../../../../../../net/minecraft/client/renderer/block/model/BlockModel.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Matrix4fc } from '../../../../../../org/joml/Matrix4fc.d.ts'
export class BlockStateModelWrapper extends Object implements BlockModel {
    constructor(model: BlockStateModel, tints: BlockTintSource[], transformation: Matrix4fc)
    // private model: BlockStateModel;
    // private tints: BlockTintSource[];
    // private transformation: Matrix4fc;
    update(arg0: BlockModelRenderState, arg1: BlockState, arg2: BlockDisplayContext, arg3: number): void;
    // private updateTints(renderState: BlockModelRenderState, blockState: BlockState): void;
}