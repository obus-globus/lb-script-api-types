import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Clicker } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/Clicker.d.ts'
import type { ClickPattern } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/pattern/ClickPattern.d.ts'
/**
 * Drag clicking is a method that is used to bypass the CPS limit of 20.
 *
 * It can be done by gliding your finger over the mouse button and causing friction
 * to click very fast.
 *
 * Is not very easy to do as it requires a lot of practice and a good mouse,
 * as well as a good grip on the mouse. Sweaty hands are a big no-no.
 *
 * This is very hard to implement as I am not able to do this method myself,
 * so I will simply guess how it works.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cf742eb17a33041e582f6f30822aab3e8450edf8/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/pattern/patterns/DragPattern.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/pattern/patterns/DragPattern.kt:36}
 */
export class DragPattern extends Object implements ClickPattern {
    static INSTANCE: DragPattern;
    fill(clickArray: number[], cps: { start: number; endInclusive: number; step: number }, clicker: Clicker<any>): void;
}