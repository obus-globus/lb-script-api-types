import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Clicker } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/Clicker.d.ts'
import type { ClickPattern } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/pattern/ClickPattern.d.ts'
/**
 * Normal distribution clicking pattern.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/pattern/patterns/NormalDistributionPattern.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/pattern/patterns/NormalDistributionPattern.kt:28}
 */
export class NormalDistributionPattern extends Object implements ClickPattern {
    static INSTANCE: NormalDistributionPattern;
    fill(clickArray: number[], cps: { start: number; endInclusive: number; step: number }, clicker: Clicker<any>): void;
}