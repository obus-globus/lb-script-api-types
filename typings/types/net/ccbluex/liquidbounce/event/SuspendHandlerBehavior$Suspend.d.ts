import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SuspendHandlerBehavior } from '../../../../net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.d.ts'
/**
 * Suspends the new event if a job is active. Thus, all events will be handled one by one.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.kt#L69 | src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.kt:69}
 */
export class SuspendHandlerBehavior$Suspend extends Object implements SuspendHandlerBehavior {
    static INSTANCE: SuspendHandlerBehavior$Suspend;
}