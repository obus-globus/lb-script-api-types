import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SuspendHandlerBehavior } from '../../../../net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.d.ts'
/**
 * Cancels the previous job if it's active.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.kt#L102 | src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.kt:102}
 */
export class SuspendHandlerBehavior$CancelPrevious extends Object implements SuspendHandlerBehavior {
    static INSTANCE: SuspendHandlerBehavior$CancelPrevious;
}