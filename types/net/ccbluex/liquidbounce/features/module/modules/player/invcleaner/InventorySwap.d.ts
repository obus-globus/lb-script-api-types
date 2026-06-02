import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
import type { Priority } from '../../../../../../../../net/ccbluex/liquidbounce/utils/kotlin/Priority.d.ts'
export class InventorySwap extends Record {
    constructor(from: ItemSlot, to: ItemSlot, priority: Priority)
    // private from: ItemSlot;
    /*not mapped: */ from(): ItemSlot;
    // private priority: Priority;
    /*not mapped: */ priority(): Priority;
    // private to: ItemSlot;
    /*not mapped: */ to(): ItemSlot;
    component1(): ItemSlot;
    component2(): ItemSlot;
    component3(): Priority;
    copy(from: ItemSlot, to: ItemSlot, priority: Priority): InventorySwap;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}