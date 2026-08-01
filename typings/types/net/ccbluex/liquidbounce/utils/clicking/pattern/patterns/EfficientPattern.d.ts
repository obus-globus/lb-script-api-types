import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Clicker } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/Clicker.d.ts'
import type { ClickPattern } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/pattern/ClickPattern.d.ts'
/**
 * Keeps at least one-tick interval between each click.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/pattern/patterns/EfficientPattern.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/pattern/patterns/EfficientPattern.kt:27}
 */
export class EfficientPattern extends Object implements ClickPattern {
    static INSTANCE: EfficientPattern;
    fill(clickArray: number[], cps: { start: number; endInclusive: number; step: number }, clicker: Clicker<any>): void;
}