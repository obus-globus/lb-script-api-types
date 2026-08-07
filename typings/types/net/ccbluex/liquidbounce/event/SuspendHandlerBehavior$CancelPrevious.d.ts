import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SuspendHandlerBehavior } from '../../../../net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.d.ts'
/**
 * Cancels the previous job if it's active.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/dde6d7a0018da1394636c7c45dd551020f020f23/src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.kt#L102 | src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.kt:102}
 */
export class SuspendHandlerBehavior$CancelPrevious extends Object implements SuspendHandlerBehavior {
    static INSTANCE: SuspendHandlerBehavior$CancelPrevious;
}