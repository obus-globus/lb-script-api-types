import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { DisplayContentsFactory } from '../../../../../../net/minecraft/world/item/crafting/display/DisplayContentsFactory.d.ts'
export interface DisplayContentsFactory$ForStacks<T extends Object | number | string | boolean> extends Object, DisplayContentsFactory<T>{
    forStack(item: Holder<Item>): T;
    forStack(item: Item): T;
    forStack(stack: ItemStack): T;
}