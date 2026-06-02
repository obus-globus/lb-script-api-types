import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ItemModel } from '../../../../../net/minecraft/client/renderer/item/ItemModel.d.ts'
import type { ItemModelResolver } from '../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { ItemStackRenderState } from '../../../../../net/minecraft/client/renderer/item/ItemStackRenderState.d.ts'
import type { ItemModelPropertyTest } from '../../../../../net/minecraft/client/renderer/item/properties/conditional/ItemModelPropertyTest.d.ts'
import type { ItemOwner } from '../../../../../net/minecraft/world/entity/ItemOwner.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemDisplayContext } from '../../../../../net/minecraft/world/item/ItemDisplayContext.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ConditionalItemModel extends Object implements ItemModel {
    constructor(property: (param0: ItemStack, param1: ClientLevel, param2: LivingEntity, param3: number, param4: ItemDisplayContext) => kotlin.Boolean, onTrue: ItemModel, onFalse: ItemModel)
    // private onFalse: ItemModel;
    // private onTrue: ItemModel;
    // private property: (param0: ItemStack, param1: ClientLevel, param2: LivingEntity, param3: number, param4: ItemDisplayContext) => kotlin.Boolean;
    update(output: ItemStackRenderState, item: ItemStack, resolver: ItemModelResolver, displayContext: ItemDisplayContext, level: ClientLevel, owner: ItemOwner, seed: number): void;
}