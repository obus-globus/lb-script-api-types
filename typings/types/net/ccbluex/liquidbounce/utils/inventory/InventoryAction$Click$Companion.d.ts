import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HotbarItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { InventoryAction$Click } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryAction$Click.d.ts'
import type { ItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
import type { AbstractContainerScreen } from '../../../../../net/minecraft/client/gui/screens/inventory/AbstractContainerScreen.d.ts'
export class InventoryAction$Click$Companion extends Object {
    performMergeStack(screen: AbstractContainerScreen<any> | null, slot: ItemSlot): InventoryAction$Click[];
    performPickup(screen: AbstractContainerScreen<any> | null, slot: ItemSlot): InventoryAction$Click;
    performPickupAll(screen: AbstractContainerScreen<any> | null, slot: ItemSlot): InventoryAction$Click;
    performQuickMove(screen: AbstractContainerScreen<any> | null, slot: ItemSlot): InventoryAction$Click;
    performSwap(screen: AbstractContainerScreen<any> | null, from: ItemSlot, to: HotbarItemSlot): InventoryAction$Click;
    performThrow(screen: AbstractContainerScreen<any> | null, slot: ItemSlot): InventoryAction$Click;
}