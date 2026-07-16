import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
import type { PlayerInventoryData } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/PlayerInventoryData.d.ts'
/**
 * Fires when the client player's inventory data is updated.
 */
export class ClientPlayerInventoryEvent extends Event implements WebSocketEvent {
    constructor(inventory: PlayerInventoryData)
    readonly inventory: PlayerInventoryData;
    readonly serializeAsync: boolean;
    readonly serializer: Gson;
}