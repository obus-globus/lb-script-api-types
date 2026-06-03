import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { DisplayContentsFactory$ForStacks } from '../../../../../../net/minecraft/world/item/crafting/display/DisplayContentsFactory$ForStacks.d.ts'
export class SlotDisplay$ItemStackContentsFactory extends Object implements DisplayContentsFactory$ForStacks<ItemStack> {
    static INSTANCE: SlotDisplay$ItemStackContentsFactory;
    constructor()
    forStack<T extends Object | number | string | boolean>(item: Holder<Item>): T;
    forStack<T extends Object | number | string | boolean>(item: Item): T;
    forStack(item: Holder<Item>): ItemStack;
    forStack(item: Item): ItemStack;
    forStack(stack: ItemStack): ItemStack;
}