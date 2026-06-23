import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Clicker } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/Clicker.d.ts'
import type { ClickPattern } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/pattern/ClickPattern.d.ts'
/**
 * Normal distribution clicking pattern.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/pattern/patterns/NormalDistributionPattern.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/pattern/patterns/NormalDistributionPattern.kt:25}
 */
export class NormalDistributionPattern extends Object implements ClickPattern {
    static INSTANCE: NormalDistributionPattern;
    fill(clickArray: number[], cps: { start: number; endInclusive: number; step: number }, clicker: Clicker<any>): void;
}