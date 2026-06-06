import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HotbarItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { InventoryAction } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryAction.d.ts'
import type { InventoryAction$Click$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryAction$Click$Companion.d.ts'
import type { InventoryConstraints } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryConstraints.d.ts'
import type { ItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
import type { AbstractContainerScreen } from '../../../../../net/minecraft/client/gui/screens/inventory/AbstractContainerScreen.d.ts'
import type { ContainerInput } from '../../../../../net/minecraft/world/inventory/ContainerInput.d.ts'
export class InventoryAction$Click extends Record implements InventoryAction {
    static Companion: InventoryAction$Click$Companion;
    /**
     * pickup -> pickup all -> pickup to handle remaining items
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryAction.kt#L107 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryAction.kt:107}
     */
    static performMergeStack(screen: AbstractContainerScreen<Object>, slot: ItemSlot): InventoryAction$Click[];
    static performPickup(screen: AbstractContainerScreen<Object>, slot: ItemSlot): InventoryAction$Click;
    static performPickupAll(screen: AbstractContainerScreen<Object>, slot: ItemSlot): InventoryAction$Click;
    static performQuickMove(screen: AbstractContainerScreen<Object>, slot: ItemSlot): InventoryAction$Click;
    static performSwap(screen: AbstractContainerScreen<Object>, from: ItemSlot, to: HotbarItemSlot): InventoryAction$Click;
    static performThrow(screen: AbstractContainerScreen<Object>, slot: ItemSlot): InventoryAction$Click;
    constructor(screen: AbstractContainerScreen<Object> | null, slot: ItemSlot, button: number, actionType: ContainerInput)
    // private actionType: ContainerInput;
    /*not mapped: */ actionType(): ContainerInput;
    // private button: number;
    /*not mapped: */ button(): number;
    // private screen: AbstractContainerScreen<Object> | null;
    /*not mapped: */ screen(): AbstractContainerScreen<Object> | null;
    // private slot: ItemSlot;
    /*not mapped: */ slot(): ItemSlot;
    canPerformAction(inventoryConstraints: InventoryConstraints): boolean;
    component1(): AbstractContainerScreen<Object> | null;
    component2(): ItemSlot;
    component3(): number;
    component4(): ContainerInput;
    copy(screen: AbstractContainerScreen<Object> | null, slot: ItemSlot, button: number, actionType: ContainerInput): InventoryAction$Click;
    equals(other: Object | null): boolean;
    hashCode(): number;
    performAction(): boolean;
    performMissClick(): boolean;
    requiresPlayerInventoryOpen(): boolean;
    toString(): string;
}