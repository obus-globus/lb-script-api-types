import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ItemSlot$Companion extends Object {
    PREFER_FEWER_ITEM: (param0: Object) => boolean;
    PREFER_MORE_ITEM: (param0: Object) => boolean;
    /**
     * Distance order:
     * current hand -> offhand -> other hotbar slots -> other slots
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt#L62 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt:62}
     */
    PREFER_NEARBY: (param0: Object) => boolean;
}