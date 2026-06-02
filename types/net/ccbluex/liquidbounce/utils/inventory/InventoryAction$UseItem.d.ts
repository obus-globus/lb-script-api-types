import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HotbarItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { InventoryAction } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryAction.d.ts'
import type { InventoryConstraints } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryConstraints.d.ts'
export class InventoryAction$UseItem extends Record implements InventoryAction {
    constructor(hotbarItemSlot: HotbarItemSlot, requester: Object | null)
    // private hotbarItemSlot: HotbarItemSlot;
    /*not mapped: */ hotbarItemSlot(): HotbarItemSlot;
    // private requester: Object | null;
    /*not mapped: */ requester(): Object | null;
    canPerformAction(inventoryConstraints: InventoryConstraints): boolean;
    component1(): HotbarItemSlot;
    component2(): Object | null;
    copy(hotbarItemSlot: HotbarItemSlot, requester: Object | null): InventoryAction$UseItem;
    equals(other: Object | null): boolean;
    hashCode(): number;
    performAction(): boolean;
    requiresPlayerInventoryOpen(): boolean;
    toString(): string;
}