import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Clicker } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/Clicker.d.ts'
import type { ClickPattern } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/pattern/ClickPattern.d.ts'
/**
 * Normal clicking but with a stabilized click cycle.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/pattern/patterns/StabilizedPattern.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/pattern/patterns/StabilizedPattern.kt:28}
 */
export class StabilizedPattern extends Object implements ClickPattern {
    static INSTANCE: StabilizedPattern;
    fill(clickArray: number[], cps: { start: number; endInclusive: number; step: number }, clicker: Clicker<any>): void;
}