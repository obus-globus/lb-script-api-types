import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Clicker } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/Clicker.d.ts'
import type { ClickPattern } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/pattern/ClickPattern.d.ts'
/**
 * Normal clicking is the most common clicking method and usually
 * results in a CPS of 5-8 and sometimes when aggressive 10-12.
 *
 *
 *
 * It is when clicking normally with your finger.
 *
 * @note I was not able to press faster than 8 CPS. @1zuna
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/pattern/patterns/SpammingPattern.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/pattern/patterns/SpammingPattern.kt:34}
 */
export class SpammingPattern extends Object implements ClickPattern {
    static INSTANCE: SpammingPattern;
    fill(clickArray: number[], cps: { start: number; endInclusive: number; step: number }, clicker: Clicker<any>): void;
}