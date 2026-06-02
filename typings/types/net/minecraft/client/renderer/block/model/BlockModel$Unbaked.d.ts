import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockModel } from '../../../../../../net/minecraft/client/renderer/block/model/BlockModel.d.ts'
import type { BlockModel$BakingContext } from '../../../../../../net/minecraft/client/renderer/block/model/BlockModel$BakingContext.d.ts'
import type { Matrix4fc } from '../../../../../../org/joml/Matrix4fc.d.ts'
export interface BlockModel$Unbaked extends Object{
    bake(context: BlockModel$BakingContext, transformation: Matrix4fc): BlockModel;
}