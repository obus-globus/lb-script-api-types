import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
/**
 * ## Vanilla use item packet sequence
 *
 * ### On Entity
 *
 * - InteractAt (>=1.8)
 * - Interact (<=1.21.11)
 * - UseItem
 *
 * ### On block
 *
 * - UseItemOn
 * - UseItem
 *
 * If the effective hand (item) is offhand, the packets are doubled (main hand -> offhand).
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/beffa1e580bb0cb76b9ba9d386521684cb421b73/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/InteractionUtils.kt#L58 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/InteractionUtils.kt:58}
 */
export class StrictInteractionSource extends Enum<StrictInteractionSource> {
    static INTERACT: StrictInteractionSource;
    static USE_ITEM: StrictInteractionSource;
    static USE_ITEM_ON: StrictInteractionSource;
    static getEntries(): StrictInteractionSource[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): StrictInteractionSource;
    static values(): (Object | null)[];
    private constructor()
    name(): "INTERACT" | "USE_ITEM_ON" | "USE_ITEM";
}