import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Clicker } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/Clicker.d.ts'
import type { ClickPattern } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/pattern/ClickPattern.d.ts'
/**
 * Double-clicking is NOT a method but a button on a few cheating mice.
 * This button is called the FIRE button and will result in two clicks when pressed once.
 *
 * This is a method that is not allowed on most servers and is considered cheating.
 * Unlikely to bypass and will result in twice the CPS (!!!).
 *
 * @remarks
 * - In the past I had a mouse with this feature and I always used it. @1zuna
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/pattern/patterns/DoubleClickPattern.kt#L24 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/pattern/patterns/DoubleClickPattern.kt:24}
 */
export class DoubleClickPattern extends Object implements ClickPattern {
    static INSTANCE: DoubleClickPattern;
    fill(clickArray: number[], cps: { start: number; endInclusive: number; step: number }, clicker: Clicker<Object>): void;
}