import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface InventoryChangeListener extends Object{
    lithium$handleComparatorAdded(arg0: ItemStack[]): boolean;
    lithium$handleInventoryContentModified(arg0: ItemStack[]): void;
    lithium$handleInventoryRemoved(arg0: ItemStack[]): void;
}