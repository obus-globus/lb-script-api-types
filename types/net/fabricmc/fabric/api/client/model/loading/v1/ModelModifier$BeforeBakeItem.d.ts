import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ModelModifier$BeforeBakeItem$Context } from '../../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelModifier$BeforeBakeItem$Context.d.ts'
import type { ItemModel$Unbaked } from '../../../../../../../../net/minecraft/client/renderer/item/ItemModel$Unbaked.d.ts'
export interface ModelModifier$BeforeBakeItem extends Object{
    modifyModelBeforeBake(arg0: ItemModel$Unbaked, arg1: ModelModifier$BeforeBakeItem$Context): ItemModel$Unbaked;
}