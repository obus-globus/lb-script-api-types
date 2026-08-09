import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemSlot$Type } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot$Type.d.ts'
import type { ItemStackHolder } from '../../../../../net/ccbluex/liquidbounce/utils/item/ItemStackHolder.d.ts'
import type { AbstractContainerScreen } from '../../../../../net/minecraft/client/gui/screens/inventory/AbstractContainerScreen.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
/**
 * Represents an inventory slot (e.g. Hotbar Slot 0, OffHand, Chestslot 5, etc.)
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt:41}
 */
export interface ItemSlot extends Object, ItemStackHolder{
    readonly itemStack: ItemStack;
    readonly slotType: ItemSlot$Type;
    equals(other: Object | null): boolean;
    /**
     * Used for example for slot click packets
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt:48}
     */
    getIdForServer(screen: AbstractContainerScreen<any> | null): number | null;
    getIdForServerWithCurrentScreen(): number | null;
    hashCode(): number;
}