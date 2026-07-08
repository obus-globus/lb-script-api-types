import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Clicker } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/Clicker.d.ts'
import type { ClickPattern } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/pattern/ClickPattern.d.ts'
/**
 * Keeps at least one-tick interval between each click.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/9e7b00e677594d328d20ab213c6936c4d553b720/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/pattern/patterns/EfficientPattern.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/pattern/patterns/EfficientPattern.kt:27}
 */
export class EfficientPattern extends Object implements ClickPattern {
    static INSTANCE: EfficientPattern;
    fill(clickArray: number[], cps: { start: number; endInclusive: number; step: number }, clicker: Clicker<any>): void;
}