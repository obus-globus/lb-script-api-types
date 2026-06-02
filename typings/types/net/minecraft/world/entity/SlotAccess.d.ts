import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface SlotAccess extends Object{
    get(): ItemStack;
    set(itemStack: ItemStack): boolean;
}