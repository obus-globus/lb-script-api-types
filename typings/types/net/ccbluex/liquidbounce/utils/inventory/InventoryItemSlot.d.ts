import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { InventoryItemSlot$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryItemSlot$Companion.d.ts'
import type { ItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
import type { ItemSlot$Type } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot$Type.d.ts'
import type { AbstractContainerScreen } from '../../../../../net/minecraft/client/gui/screens/inventory/AbstractContainerScreen.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class InventoryItemSlot extends Object implements ItemSlot {
    static ALL: InventoryItemSlot[];
    static Companion: InventoryItemSlot$Companion;
    static PREFER_FEWER_ITEM: (param0: Object, param1: Object) => number;
    static PREFER_MORE_ITEM: (param0: Object, param1: Object) => number;
    static PREFER_NEARBY: (param0: ItemSlot, param1: ItemSlot) => number;
    static of(paramarg0: number): InventoryItemSlot;
    private constructor(inventorySlot: number)
    // private inventorySlot: number;
    readonly itemStack: ItemStack;
    readonly slotType: ItemSlot$Type;
    equals(other: Object | null): boolean;
    getIdForServer(screen: AbstractContainerScreen<any> | null): number;
    getIdForServerWithCurrentScreen(): number | null;
    hashCode(): number;
    toString(): string;
}