import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Clicker } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/Clicker.d.ts'
import type { ClickPattern } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/pattern/ClickPattern.d.ts'
/**
 * Keeps at least one-tick interval between each click.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/pattern/patterns/EfficientPattern.kt#L24 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/pattern/patterns/EfficientPattern.kt:24}
 */
export class EfficientPattern extends Object implements ClickPattern {
    static INSTANCE: EfficientPattern;
    fill(clickArray: number[], cps: { start: number; endInclusive: number; step: number }, clicker: Clicker<Object>): void;
}