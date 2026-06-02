import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ItemModel } from '../../../../../../../../../net/minecraft/client/renderer/item/ItemModel.d.ts'
import type { ItemModelResolver } from '../../../../../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { ItemStackRenderState } from '../../../../../../../../../net/minecraft/client/renderer/item/ItemStackRenderState.d.ts'
import type { ItemOwner } from '../../../../../../../../../net/minecraft/world/entity/ItemOwner.d.ts'
import type { ItemDisplayContext } from '../../../../../../../../../net/minecraft/world/item/ItemDisplayContext.d.ts'
import type { ItemStack } from '../../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export abstract class WrapperBakedItemModel extends Object implements ItemModel {
    constructor()
    constructor(arg0: ItemModel)
    // private wrapped: ItemModel;
    update(arg0: ItemStackRenderState, arg1: ItemStack, arg2: ItemModelResolver, arg3: ItemDisplayContext, arg4: ClientLevel, arg5: ItemOwner, arg6: number): void;
}