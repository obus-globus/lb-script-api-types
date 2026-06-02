import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface LootCommand$Callback extends Object{
    accept(setItems: ItemStack[]): void;
}