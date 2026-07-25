import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SuspendHandlerBehavior } from '../../../../net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.d.ts'
/**
 * Suspends the new event if a job is active. Thus, all events will be handled one by one.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cf742eb17a33041e582f6f30822aab3e8450edf8/src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.kt#L69 | src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.kt:69}
 */
export class SuspendHandlerBehavior$Suspend extends Object implements SuspendHandlerBehavior {
    static INSTANCE: SuspendHandlerBehavior$Suspend;
}