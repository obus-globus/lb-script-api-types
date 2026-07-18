import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Clicker } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/Clicker.d.ts'
import type { ClickPattern } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/pattern/ClickPattern.d.ts'
/**
 * Normal clicking but with a stabilized click cycle.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/pattern/patterns/StabilizedPattern.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/pattern/patterns/StabilizedPattern.kt:28}
 */
export class StabilizedPattern extends Object implements ClickPattern {
    static INSTANCE: StabilizedPattern;
    fill(clickArray: number[], cps: { start: number; endInclusive: number; step: number }, clicker: Clicker<any>): void;
}