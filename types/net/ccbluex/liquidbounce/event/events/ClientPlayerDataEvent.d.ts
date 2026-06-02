import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
import type { PlayerData } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/PlayerData.d.ts'
export class ClientPlayerDataEvent extends Event implements WebSocketEvent {
    constructor(playerData: PlayerData)
    readonly playerData: PlayerData;
}