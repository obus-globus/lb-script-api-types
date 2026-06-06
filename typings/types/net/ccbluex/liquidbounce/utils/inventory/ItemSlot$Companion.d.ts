import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
export class ItemSlot$Companion extends Object {
    PREFER_FEWER_ITEM: (param0: ItemSlot) => kotlin.Boolean;
    PREFER_MORE_ITEM: (param0: ItemSlot) => kotlin.Boolean;
    /**
     * Distance order:
     * current hand -> offhand -> other hotbar slots -> other slots
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt:59}
     */
    PREFER_NEARBY: (param0: ItemSlot) => kotlin.Boolean;
}