import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * We can use this event to populate the render task queue with tasks that should be
 * executed in the same frame. This is useful for more responsive task execution
 * and allows to also schedule tasks off-schedule.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/event/events/GameEvents.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/event/events/GameEvents.kt:54}
 */
export class GameRenderTaskQueueEvent extends Event {
    static INSTANCE: GameRenderTaskQueueEvent;
}