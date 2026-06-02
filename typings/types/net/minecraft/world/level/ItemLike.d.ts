import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
export interface ItemLike extends Object{
    asItem(): Item;
}