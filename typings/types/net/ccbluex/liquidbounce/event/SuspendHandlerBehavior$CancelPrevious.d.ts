import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SuspendHandlerBehavior } from '../../../../net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.d.ts'
/**
 * Cancels the previous job if it's active.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.kt#L102 | src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.kt:102}
 */
export class SuspendHandlerBehavior$CancelPrevious extends Object implements SuspendHandlerBehavior {
    static INSTANCE: SuspendHandlerBehavior$CancelPrevious;
}