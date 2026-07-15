import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * We can use this event to populate the render task queue with tasks that should be
 * executed in the same frame. This is useful for more responsive task execution
 * and allows to also schedule tasks off-schedule.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/event/events/GameEvents.kt#L53 | src/main/kotlin/net/ccbluex/liquidbounce/event/events/GameEvents.kt:53}
 */
export class GameRenderTaskQueueEvent extends Event {
    static INSTANCE: GameRenderTaskQueueEvent;
}