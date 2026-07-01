import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Clicker } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/Clicker.d.ts'
import type { ClickPattern } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/pattern/ClickPattern.d.ts'
/**
 * Normal clicking but with a stabilized click cycle.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/pattern/patterns/StabilizedPattern.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/pattern/patterns/StabilizedPattern.kt:28}
 */
export class StabilizedPattern extends Object implements ClickPattern {
    static INSTANCE: StabilizedPattern;
    fill(clickArray: number[], cps: { start: number; endInclusive: number; step: number }, clicker: Clicker<any>): void;
}