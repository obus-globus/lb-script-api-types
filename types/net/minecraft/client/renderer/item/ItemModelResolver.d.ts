import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientItem$Properties } from '../../../../../net/minecraft/client/renderer/item/ClientItem$Properties.d.ts'
import type { ItemModel } from '../../../../../net/minecraft/client/renderer/item/ItemModel.d.ts'
import type { ItemStackRenderState } from '../../../../../net/minecraft/client/renderer/item/ItemStackRenderState.d.ts'
import type { ModelManager } from '../../../../../net/minecraft/client/resources/model/ModelManager.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ItemOwner } from '../../../../../net/minecraft/world/entity/ItemOwner.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemDisplayContext } from '../../../../../net/minecraft/world/item/ItemDisplayContext.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export class ItemModelResolver extends Object {
    constructor(modelManager: ModelManager)
    // private modelManager: ModelManager;
    // private previousBeValue: number;
    appendItemLayers(output: ItemStackRenderState, item: ItemStack, displayContext: ItemDisplayContext, level: Level, owner: ItemOwner, seed: number): void;
    // private getItemModel(modelId: Identifier): ItemModel;
    // private getItemProperties(modelId: Identifier): ClientItem$Properties;
    shouldPlaySwapAnimation(stack: ItemStack): boolean;
    swapAnimationScale(stack: ItemStack): number;
    updateForLiving(output: ItemStackRenderState, item: ItemStack, displayContext: ItemDisplayContext, entity: LivingEntity): void;
    updateForNonLiving(output: ItemStackRenderState, item: ItemStack, displayContext: ItemDisplayContext, entity: Entity): void;
    updateForTopItem(output: ItemStackRenderState, item: ItemStack, displayContext: ItemDisplayContext, level: Level, owner: ItemOwner, seed: number): void;
}