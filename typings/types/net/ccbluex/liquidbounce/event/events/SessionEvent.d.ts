import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
import type { User } from '../../../../../net/minecraft/client/User.d.ts'
/**
 * All events which are related to the minecraft client
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/event/events/GameEvents.kt#L120 | src/main/kotlin/net/ccbluex/liquidbounce/event/events/GameEvents.kt:120}
 */
export class SessionEvent extends Event implements WebSocketEvent {
    constructor(session: User)
    readonly session: User;
}