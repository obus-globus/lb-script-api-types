import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
import type { User } from '../../../../../net/minecraft/client/User.d.ts'
/**
 * All events which are related to the minecraft client
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/dde6d7a0018da1394636c7c45dd551020f020f23/src/main/kotlin/net/ccbluex/liquidbounce/event/events/GameEvents.kt#L121 | src/main/kotlin/net/ccbluex/liquidbounce/event/events/GameEvents.kt:121}
 */
export class SessionEvent extends Event implements WebSocketEvent {
    constructor(session: User)
    readonly serializeAsync: boolean;
    readonly serializer: Gson;
    readonly session: User;
}