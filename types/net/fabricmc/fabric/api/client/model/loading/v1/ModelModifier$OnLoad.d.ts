import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ModelModifier$OnLoad$Context } from '../../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelModifier$OnLoad$Context.d.ts'
import type { UnbakedModel } from '../../../../../../../../net/minecraft/client/resources/model/UnbakedModel.d.ts'
export interface ModelModifier$OnLoad extends Object{
    modifyModelOnLoad(arg0: UnbakedModel, arg1: ModelModifier$OnLoad$Context): UnbakedModel;
}