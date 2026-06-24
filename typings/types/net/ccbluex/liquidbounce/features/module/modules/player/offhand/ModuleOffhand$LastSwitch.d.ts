import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
import type { Item } from '../../../../../../../../net/minecraft/world/item/Item.d.ts'
export class ModuleOffhand$LastSwitch extends Object {
    constructor(item: Item, slot: ItemSlot)
    readonly item: Item;
    readonly slot: ItemSlot;
    component1(): Item;
    component2(): ItemSlot;
    copy(item: Item, slot: ItemSlot): ModuleOffhand$LastSwitch;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}