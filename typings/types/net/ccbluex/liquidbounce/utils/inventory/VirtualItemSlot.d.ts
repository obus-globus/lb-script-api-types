import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
import type { ItemSlot$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot$Companion.d.ts'
import type { ItemSlot$Type } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot$Type.d.ts'
import type { AbstractContainerScreen } from '../../../../../net/minecraft/client/gui/screens/inventory/AbstractContainerScreen.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
/**
 * @param id the id this slot is identified by. Two virtual slots that have the same id are considered equal.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt#L95 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt:95}
 */
export class VirtualItemSlot extends Object implements ItemSlot {
    static Companion: ItemSlot$Companion;
    static PREFER_FEWER_ITEM: (param0: Object | null) => kotlin.Boolean;
    static PREFER_MORE_ITEM: (param0: Object | null) => kotlin.Boolean;
    static PREFER_NEARBY: (param0: ItemSlot) => kotlin.Boolean;
    constructor(itemStack: ItemStack, slotType: ItemSlot$Type, id: number)
    readonly id: number;
    readonly itemStack: ItemStack;
    readonly slotType: ItemSlot$Type;
    equals(other: Object | null): boolean;
    getIdForServer(screen: AbstractContainerScreen<Object> | null): void;
    getIdForServerWithCurrentScreen(): number | null;
    hashCode(): number;
    toString(): string;
}