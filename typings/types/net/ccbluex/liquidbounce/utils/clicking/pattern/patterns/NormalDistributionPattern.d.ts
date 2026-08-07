import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Clicker } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/Clicker.d.ts'
import type { ClickPattern } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/pattern/ClickPattern.d.ts'
/**
 * Normal distribution clicking pattern.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/dde6d7a0018da1394636c7c45dd551020f020f23/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/pattern/patterns/NormalDistributionPattern.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/pattern/patterns/NormalDistributionPattern.kt:28}
 */
export class NormalDistributionPattern extends Object implements ClickPattern {
    static INSTANCE: NormalDistributionPattern;
    fill(clickArray: number[], cps: { start: number; endInclusive: number; step: number }, clicker: Clicker<any>): void;
}