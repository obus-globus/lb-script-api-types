import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
import type { User } from '../../../../../net/minecraft/client/User.d.ts'
/**
 * All events which are related to the minecraft client
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/event/events/GameEvents.kt#L120 | src/main/kotlin/net/ccbluex/liquidbounce/event/events/GameEvents.kt:120}
 */
export class SessionEvent extends Event implements WebSocketEvent {
    constructor(session: User)
    readonly session: User;
}