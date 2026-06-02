import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus extends Enum<ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus> {
    /**
     * Keep the item
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemPacker.kt#L167 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemPacker.kt:167}
     */
    static NOT_SATISFIED: ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus;
    /**
     * The item shouldn't be kept - even if there are still slots to fill.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemPacker.kt#L177 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemPacker.kt:177}
     */
    static OVERSATURATED: ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus;
    /**
     * The item is not needed - except for filling slots.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemPacker.kt#L172 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemPacker.kt:172}
     */
    static SATISFIED: ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus;
    static getEntries(): ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus;
    static values(): (Object | null)[];
    private constructor()
    name(): "NOT_SATISFIED" | "SATISFIED" | "OVERSATURATED";
}