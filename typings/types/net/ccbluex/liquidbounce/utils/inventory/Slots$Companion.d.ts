import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ArmorItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ArmorItemSlot.d.ts'
import type { HotbarItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { InventoryItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryItemSlot.d.ts'
import type { ItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
export class Slots$Companion extends Object {
    /**
     * Hotbar + OffHand + Inventory + Armor
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/Slots.kt#L109 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/Slots.kt:109}
     */
    All: ItemSlot[];
    /**
     * Armor slots 0~3
     *
     * Boots/Leggings/Chestplate/Helmet
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/Slots.kt#L95 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/Slots.kt:95}
     */
    Armor: ArmorItemSlot[];
    /**
     * Hotbar 0~8
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/Slots.kt#L77 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/Slots.kt:77}
     */
    Hotbar: HotbarItemSlot[];
    /**
     * Hotbar + Inventory
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/Slots.kt#L89 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/Slots.kt:89}
     */
    HotbarAndInventory: ItemSlot[];
    /**
     * Inventory 0~26
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/Slots.kt#L83 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/Slots.kt:83}
     */
    Inventory: InventoryItemSlot[];
    /**
     * Offhand + Hotbar
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/Slots.kt#L103 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/Slots.kt:103}
     */
    OffhandWithHotbar: HotbarItemSlot[];
}