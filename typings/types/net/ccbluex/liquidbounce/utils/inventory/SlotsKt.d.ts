import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HotbarItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { TagKey } from '../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class SlotsKt extends Object {
    static findClosestSlot<T extends HotbarItemSlot>(self: T[], items: Item[]): T | null;
    static findClosestSlot<T extends HotbarItemSlot>(self: T[], predicate: (param0: ItemStack) => boolean): T | null;
    static findClosestSlot<T extends HotbarItemSlot>(self: T[], itemTag: TagKey<Item>): T | null;
    static findClosestSlot<T extends HotbarItemSlot>(self: T[], item: Item): T | null;
    static findClosestSlot<T extends HotbarItemSlot>(self: T[], ...items: Item[]): T | null;
}