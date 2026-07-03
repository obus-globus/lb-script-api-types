import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
import type { User } from '../../../../../net/minecraft/client/User.d.ts'
/**
 * All events which are related to the minecraft client
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0a21163cac7d7e3736ae038e79bf85f09f24d875/src/main/kotlin/net/ccbluex/liquidbounce/event/events/GameEvents.kt#L120 | src/main/kotlin/net/ccbluex/liquidbounce/event/events/GameEvents.kt:120}
 */
export class SessionEvent extends Event implements WebSocketEvent {
    constructor(session: User)
    readonly session: User;
}