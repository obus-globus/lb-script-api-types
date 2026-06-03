import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TagKey } from '../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
export class SlotsKt extends Object {
    static findClosestSlot(paramarg0: (Object | null)[], paramarg1: E[]): Object | null;
    static findClosestSlot(paramarg0: (Object | null)[], paramarg1: (param0: Object | null) => boolean): Object | null;
    static findClosestSlot(paramarg0: (Object | null)[], paramarg1: TagKey<Item>): Object | null;
    static findClosestSlot(paramarg0: (Object | null)[], paramarg1: Item): Object | null;
    static findClosestSlot(paramarg0: (Object | null)[], paramarg1: (Object | null)[]): Object | null;
}