import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * We can use this event to populate the render task queue with tasks that should be
 * executed in the same frame. This is useful for more responsive task execution
 * and allows to also schedule tasks off-schedule.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/event/events/GameEvents.kt#L53 | src/main/kotlin/net/ccbluex/liquidbounce/event/events/GameEvents.kt:53}
 */
export class GameRenderTaskQueueEvent extends Event {
    static INSTANCE: GameRenderTaskQueueEvent;
}