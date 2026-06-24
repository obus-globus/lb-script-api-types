import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SuspendHandlerBehavior } from '../../../../net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.d.ts'
/**
 * Suspends the new event if a job is active. Thus, all events will be handled one by one.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.kt#L66 | src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.kt:66}
 */
export class SuspendHandlerBehavior$Suspend extends Object implements SuspendHandlerBehavior {
    static INSTANCE: SuspendHandlerBehavior$Suspend;
}