import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HotbarItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { TagKey } from '../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
export class SlotsKt extends Object {
    static findClosestSlot(paramarg0: (HotbarItemSlot | null)[], paramarg1: Item[]): HotbarItemSlot | null;
    static findClosestSlot(paramarg0: (HotbarItemSlot | null)[], paramarg1: (param0: Object) => boolean): HotbarItemSlot | null;
    static findClosestSlot(paramarg0: (HotbarItemSlot | null)[], paramarg1: TagKey<Item>): HotbarItemSlot | null;
    static findClosestSlot(paramarg0: (HotbarItemSlot | null)[], paramarg1: Item): HotbarItemSlot | null;
    static findClosestSlot(paramarg0: (HotbarItemSlot | null)[], paramarg1: (Object | null)[]): HotbarItemSlot | null;
}