import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ArmorItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ArmorItemSlot.d.ts'
import type { HotbarItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { InventoryItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryItemSlot.d.ts'
import type { ItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
export class Slots$Companion extends Object {
    All: ItemSlot[];
    Armor: ArmorItemSlot[];
    Hotbar: HotbarItemSlot[];
    HotbarAndInventory: ItemSlot[];
    Inventory: InventoryItemSlot[];
    OffhandWithHotbar: HotbarItemSlot[];
}