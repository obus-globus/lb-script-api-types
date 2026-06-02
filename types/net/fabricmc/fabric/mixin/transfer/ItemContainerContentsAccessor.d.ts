import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemStackTemplate } from '../../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
export interface ItemContainerContentsAccessor extends Object{
    fabric_getItems(): Optional<ItemStackTemplate>[];
}