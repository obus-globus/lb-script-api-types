import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ModelModifier$AfterBakeBlock$Context } from '../../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelModifier$AfterBakeBlock$Context.d.ts'
import type { BlockStateModel } from '../../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
export interface ModelModifier$AfterBakeBlock extends Object{
    modifyModelAfterBake(arg0: BlockStateModel, arg1: ModelModifier$AfterBakeBlock$Context): BlockStateModel;
}