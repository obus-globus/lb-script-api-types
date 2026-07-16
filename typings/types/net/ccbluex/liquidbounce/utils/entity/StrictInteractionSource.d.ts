import type { Class } from '../../../../../java/lang/Class.d.ts'
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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/InteractionUtils.kt#L58 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/InteractionUtils.kt:58}
 */
export class StrictInteractionSource extends Enum<StrictInteractionSource> {
    static INTERACT: StrictInteractionSource;
    static USE_ITEM: StrictInteractionSource;
    static USE_ITEM_ON: StrictInteractionSource;
    static getEntries(): StrictInteractionSource[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): StrictInteractionSource;
    static values(): StrictInteractionSource[];
    private constructor()
    name(): "INTERACT" | "USE_ITEM_ON" | "USE_ITEM";
}