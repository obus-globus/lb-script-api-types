import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Clicker } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/Clicker.d.ts'
import type { ClickPattern } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/pattern/ClickPattern.d.ts'
/**
 * Butterfly clicking is a method that is used to bypass the CPS limit of 20.
 *
 * It will often result in double click (very similar to the double click technique - but randomized).
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/pattern/patterns/ButterflyPattern.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/pattern/patterns/ButterflyPattern.kt:29}
 */
export class ButterflyPattern extends Object implements ClickPattern {
    static INSTANCE: ButterflyPattern;
    fill(clickArray: number[], cps: { start: number; endInclusive: number; step: number }, clicker: Clicker<any>): void;
}