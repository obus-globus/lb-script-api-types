import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ItemModel } from '../../../../../net/minecraft/client/renderer/item/ItemModel.d.ts'
import type { ItemModelResolver } from '../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { ItemStackRenderState } from '../../../../../net/minecraft/client/renderer/item/ItemStackRenderState.d.ts'
import type { SelectItemModel$ModelSelector } from '../../../../../net/minecraft/client/renderer/item/SelectItemModel$ModelSelector.d.ts'
import type { SelectItemModelProperty } from '../../../../../net/minecraft/client/renderer/item/properties/select/SelectItemModelProperty.d.ts'
import type { ItemOwner } from '../../../../../net/minecraft/world/entity/ItemOwner.d.ts'
import type { ItemDisplayContext } from '../../../../../net/minecraft/world/item/ItemDisplayContext.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class SelectItemModel<T extends Object | number | string | boolean> extends Object implements ItemModel {
    constructor(property: SelectItemModelProperty<T>, models: (param0: T, param1: Object | null) => net.minecraft.client.renderer.item.ItemModel)
    // private models: (param0: T, param1: Object | null) => net.minecraft.client.renderer.item.ItemModel;
    // private property: SelectItemModelProperty<T>;
    update(output: ItemStackRenderState, item: ItemStack, resolver: ItemModelResolver, displayContext: ItemDisplayContext, level: ClientLevel, owner: ItemOwner, seed: number): void;
}