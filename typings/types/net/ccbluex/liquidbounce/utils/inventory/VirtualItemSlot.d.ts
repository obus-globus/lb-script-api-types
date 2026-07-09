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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt#L97 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt:97}
 */
export class VirtualItemSlot extends Object implements ItemSlot {
    static Companion: ItemSlot$Companion;
    static PREFER_FEWER_ITEM: (param0: Object) => boolean;
    static PREFER_MORE_ITEM: (param0: Object) => boolean;
    static PREFER_NEARBY: (param0: Object) => boolean;
    constructor(itemStack: ItemStack, slotType: ItemSlot$Type, id: number)
    readonly id: number;
    readonly itemStack: ItemStack;
    readonly slotType: ItemSlot$Type;
    equals(other: Object | null): boolean;
    getIdForServer(screen: AbstractContainerScreen<any> | null): void;
    getIdForServerWithCurrentScreen(): number | null;
    hashCode(): number;
    toString(): string;
}