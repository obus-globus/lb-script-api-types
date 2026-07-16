import type { ArmorItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ArmorItemSlot.d.ts'
import type { HotbarItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { InventoryItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryItemSlot.d.ts'
import type { ItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
import type { Slots$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/Slots$Companion.d.ts'
export class Slots<T extends ItemSlot> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static All: ItemSlot[];
    static Armor: ArmorItemSlot[];
    static Companion: Slots$Companion;
    static Hotbar: HotbarItemSlot[];
    static HotbarAndInventory: ItemSlot[];
    static Inventory: InventoryItemSlot[];
    static OffhandWithHotbar: HotbarItemSlot[];
}