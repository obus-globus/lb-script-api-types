import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ItemModel } from '../../../../../net/minecraft/client/renderer/item/ItemModel.d.ts'
import type { ItemModelResolver } from '../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { ItemStackRenderState } from '../../../../../net/minecraft/client/renderer/item/ItemStackRenderState.d.ts'
import type { RangeSelectItemModelProperty } from '../../../../../net/minecraft/client/renderer/item/properties/numeric/RangeSelectItemModelProperty.d.ts'
import type { ItemOwner } from '../../../../../net/minecraft/world/entity/ItemOwner.d.ts'
import type { ItemDisplayContext } from '../../../../../net/minecraft/world/item/ItemDisplayContext.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class RangeSelectItemModel extends Object implements ItemModel {
    private constructor(property: RangeSelectItemModelProperty, scale: number, thresholds: number[], models: ItemModel[], fallback: ItemModel)
    // private fallback: ItemModel;
    // private models: ItemModel[];
    // private property: RangeSelectItemModelProperty;
    // private scale: number;
    // private thresholds: number[];
    update(output: ItemStackRenderState, item: ItemStack, resolver: ItemModelResolver, displayContext: ItemDisplayContext, level: ClientLevel, owner: ItemOwner, seed: number): void;
}