import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ModelModifier$OnLoadBlock$Context } from '../../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelModifier$OnLoadBlock$Context.d.ts'
import type { BlockStateModel$UnbakedRoot } from '../../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$UnbakedRoot.d.ts'
export interface ModelModifier$OnLoadBlock extends Object{
    modifyModelOnLoad(arg0: BlockStateModel$UnbakedRoot, arg1: ModelModifier$OnLoadBlock$Context): BlockStateModel$UnbakedRoot;
}