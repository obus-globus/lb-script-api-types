import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * We can use this event to populate the render task queue with tasks that should be
 * executed in the same frame. This is useful for more responsive task execution
 * and allows to also schedule tasks off-schedule.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/event/events/GameEvents.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/event/events/GameEvents.kt:54}
 */
export class GameRenderTaskQueueEvent extends Event {
    static INSTANCE: GameRenderTaskQueueEvent;
}