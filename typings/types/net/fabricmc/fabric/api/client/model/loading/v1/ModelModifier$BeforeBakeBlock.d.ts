import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ModelModifier$BeforeBakeBlock$Context } from '../../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelModifier$BeforeBakeBlock$Context.d.ts'
import type { BlockStateModel$UnbakedRoot } from '../../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$UnbakedRoot.d.ts'
export interface ModelModifier$BeforeBakeBlock extends Object{
    modifyModelBeforeBake(arg0: BlockStateModel$UnbakedRoot, arg1: ModelModifier$BeforeBakeBlock$Context): BlockStateModel$UnbakedRoot;
}