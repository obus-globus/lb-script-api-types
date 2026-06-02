import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
import type { ItemSlot$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot$Companion.d.ts'
import type { ItemSlot$Type } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot$Type.d.ts'
import type { AbstractContainerScreen } from '../../../../../net/minecraft/client/gui/screens/inventory/AbstractContainerScreen.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ContainerItemSlot extends Object implements ItemSlot {
    static Companion: ItemSlot$Companion;
    static PREFER_FEWER_ITEM: (param0: Object | null) => kotlin.Boolean;
    static PREFER_MORE_ITEM: (param0: Object | null) => kotlin.Boolean;
    static PREFER_NEARBY: (param0: ItemSlot) => kotlin.Boolean;
    constructor(slotInContainer: number)
    readonly itemStack: ItemStack;
    readonly slotInContainer: number;
    readonly slotType: ItemSlot$Type;
    distance(itemSlot: ContainerItemSlot): number;
    equals(other: Object | null): boolean;
    getIdForServer(screen: AbstractContainerScreen<Object> | null): number;
    getIdForServerWithCurrentScreen(): number | null;
    hashCode(): number;
    toString(): string;
}