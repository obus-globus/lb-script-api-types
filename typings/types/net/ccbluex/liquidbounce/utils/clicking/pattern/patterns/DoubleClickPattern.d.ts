import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Clicker } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/Clicker.d.ts'
import type { ClickPattern } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/pattern/ClickPattern.d.ts'
/**
 * Double-clicking is NOT a method but a button on a few cheating mice.
 * This button is called the FIRE button and will result in two clicks when pressed once.
 *
 * This is a method that is not allowed on most servers and is considered cheating.
 * Unlikely to bypass and will result in twice the CPS (!!!).
 *
 * @note In the past I had a mouse with this feature and I always used it. @1zuna
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/pattern/patterns/DoubleClickPattern.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/pattern/patterns/DoubleClickPattern.kt:33}
 */
export class DoubleClickPattern extends Object implements ClickPattern {
    static INSTANCE: DoubleClickPattern;
    fill(clickArray: number[], cps: { start: number; endInclusive: number; step: number }, clicker: Clicker<any>): void;
}