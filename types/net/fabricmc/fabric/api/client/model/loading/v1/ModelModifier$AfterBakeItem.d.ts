import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ModelModifier$AfterBakeItem$Context } from '../../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelModifier$AfterBakeItem$Context.d.ts'
import type { ItemModel } from '../../../../../../../../net/minecraft/client/renderer/item/ItemModel.d.ts'
export interface ModelModifier$AfterBakeItem extends Object{
    modifyModelAfterBake(arg0: ItemModel, arg1: ModelModifier$AfterBakeItem$Context): ItemModel;
}