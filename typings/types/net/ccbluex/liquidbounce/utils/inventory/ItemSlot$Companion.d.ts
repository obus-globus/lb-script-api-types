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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt#L62 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt:62}
     */
    PREFER_NEARBY: (param0: ItemSlot, param1: ItemSlot) => number;
}