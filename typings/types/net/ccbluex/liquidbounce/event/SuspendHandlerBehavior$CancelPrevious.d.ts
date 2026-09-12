import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SuspendHandlerBehavior } from '../../../../net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.d.ts'
/**
 * Cancels the previous job if it's active.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f0d427e933b0c39374cea4bd371582db202074f3/src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.kt#L102 | src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.kt:102}
 */
export class SuspendHandlerBehavior$CancelPrevious extends Object implements SuspendHandlerBehavior {
    static INSTANCE: SuspendHandlerBehavior$CancelPrevious;
}