import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
import type { User } from '../../../../../net/minecraft/client/User.d.ts'
/**
 * All events which are related to the minecraft client
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/event/events/GameEvents.kt#L121 | src/main/kotlin/net/ccbluex/liquidbounce/event/events/GameEvents.kt:121}
 */
export class SessionEvent extends Event implements WebSocketEvent {
    constructor(session: User)
    readonly serializeAsync: boolean;
    readonly serializer: Gson;
    readonly session: User;
}