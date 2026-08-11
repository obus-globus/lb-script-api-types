import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
export class ItemSlot$Companion extends Object {
    PREFER_FEWER_ITEM: (param0: ItemSlot, param1: ItemSlot) => number;
    PREFER_MORE_ITEM: (param0: ItemSlot, param1: ItemSlot) => number;
    /**
     * Distance order:
     * current hand -> offhand -> other hotbar slots -> other slots
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b7cc679e71b1bc95d19a1e1535f79a1c2164149e/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt#L62 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt:62}
     */
    PREFER_NEARBY: (param0: ItemSlot, param1: ItemSlot) => number;
}