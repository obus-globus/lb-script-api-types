import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
export interface ItemContextState extends Object{
    getDisplayItem(): Item;
    getDisplayItemModel(): Identifier;
    setDisplayItem(arg0: Item, arg1: Identifier): void;
}