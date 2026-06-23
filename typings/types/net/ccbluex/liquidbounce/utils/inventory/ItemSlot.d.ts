import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemSlot$Type } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot$Type.d.ts'
import type { ItemStackHolder } from '../../../../../net/ccbluex/liquidbounce/utils/item/ItemStackHolder.d.ts'
import type { AbstractContainerScreen } from '../../../../../net/minecraft/client/gui/screens/inventory/AbstractContainerScreen.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
/**
 * Represents an inventory slot (e.g. Hotbar Slot 0, OffHand, Chestslot 5, etc.)
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt:39}
 */
export interface ItemSlot extends Object, ItemStackHolder{
    readonly itemStack: ItemStack;
    readonly slotType: ItemSlot$Type;
    equals(other: Object | null): boolean;
    /**
     * Used for example for slot click packets
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt:46}
     */
    getIdForServer(screen: AbstractContainerScreen<any> | null): number | null;
    getIdForServerWithCurrentScreen(): number | null;
    hashCode(): number;
}